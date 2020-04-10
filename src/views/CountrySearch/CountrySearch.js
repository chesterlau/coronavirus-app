import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const CountrySearch = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    Axios.get("https://api.covid19api.com/countries")
      .then(res => {      
        let countries = res.data.map((element, index) => ({ id: index, name: element.Country, slug: element.Slug }));
        setCountries(countries);
      })
  }, [])

  const setSelected = (event) => {

    if(event.length > 0)
    {
      //Get stats
      console.log(event);
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
        <div className="col-md">
          <form>
            <div className="form-group">
              <Typeahead
                id="basic-typeahead-example"
                labelKey="name"
                onChange={setSelected}
                options={countries}
                placeholder="Enter a country..."
                //selected={test}
              />
            </div>
          </form>
        </div>
      </div>
    </div>)
}

export default CountrySearch;