import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import CountryStatistics from '../CountryStatistics/CountryStatistics'
import Loader from 'react-loader-spinner';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CountrySearch = () => {

  const [countries, setCountries] = useState([]);
  const [countryStatistics, setCountryStatistics] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const covid19BaseUrl = "https://api.covid19api.com";

  useEffect(() => {
    Axios.get(`${covid19BaseUrl}/countries`)
      .then(res => {
        const countries = res.data.map((element, index) => ({ id: index, name: element.Country, slug: element.Slug }));
        setCountries(countries);
      });
  }, []);

  const handleOnChange = (event) => {    
    if (event.length > 0) {
      setShowLoader(true);
      
      Axios.get(`${covid19BaseUrl}/total/country/${event[0].slug}/status/confirmed`)
        .then(res => {
          console.log(res.data.slice(-1)[0]);
          setCountryStatistics({ ...res.data.slice(-1)[0], HasData: res.data.slice(-1)[0] != null ? true : false });
          setShowLoader(false);
        });
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h4>Covid-19 Stats</h4>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-9">
          <form>
            <div className="form-group">
              <Typeahead
                id="basic-typeahead-example"
                labelKey="name"
                onChange={handleOnChange}
                options={countries}
                placeholder="Enter a country..."
              />
            </div>
          </form>
        </div>
        <div className="col-md-3">
          <Loader
            type="Puff"
            color="#00BFFF"
            visible={showLoader}
            height={30}
            width={30}
            timeout={0} //3 secs
          />
        </div>
      </div>
      <br />
      <CountryStatistics {...countryStatistics} />
    </div>)
}

export default CountrySearch;