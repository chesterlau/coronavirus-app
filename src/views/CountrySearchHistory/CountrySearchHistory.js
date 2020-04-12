import React from 'react';
import { connect } from 'react-redux';
import './CountrySearchHistory.css';

const CountrySearchHistory = ({countryHistories, onDeleteHistory}) => {

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h5>Search History</h5>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Country</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Recovered</th>
                <th scope="col">Deaths</th>
                <th scope="col">Updated (UTC)</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {countryHistories.map((item, index) => {
                return [<tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.Country}</td>
                  <td>{item.Cases}</td>
                  <td>{item.TotalRecovered}</td>
                  <td>{item.TotalDeaths}</td>
                  <td>{item.Date}</td>
                  <td className="removeColumn" onClick={() => onDeleteHistory(item.ApiCallTime)}>remove</td>
                </tr>]
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteHistory: (value) => dispatch({ type: 'DELETE_HISTORY', value: value })
  };
};

export default connect(null, mapDispatchToProps)(CountrySearchHistory);
