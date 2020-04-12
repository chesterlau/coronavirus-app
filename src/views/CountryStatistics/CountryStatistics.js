import React from 'react';

const CountryStatistics = ({ Country, Cases, TotalRecovered, TotalDeaths, Date, HasData }) => {

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h5>Statistics</h5>
          <hr />
        </div>
      </div>
      <div className="row">

        <div className="col-md">
          {(HasData !== undefined && !HasData) ? <span>No data<br /></span> : ""}

          <b>Country:</b> {Country}
          <br />
          <b>Confirmed Cases:</b> {Cases}
          <br />
          <b>Total Recovered:</b> {TotalRecovered}
          <br />
          <b>Total TotalDeaths:</b> {TotalDeaths}
          <br />
          <b>Updated (UTC):</b> {Date}
        </div>
      </div>
    </div>

  )

}
export default CountryStatistics;