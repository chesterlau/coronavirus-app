import React from 'react';

const CountryStatistics = ({ Country, Cases, Status, Date, HasData }) => {

  console.log(HasData);

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
          <b>Cases:</b> {Cases}
          <br />
          <b>Status:</b> {Status}
          <br />
          <b>Updated (UTC):</b> {Date}
        </div>
      </div>
    </div>

  )

}
export default CountryStatistics;