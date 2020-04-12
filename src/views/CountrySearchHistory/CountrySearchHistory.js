import React from 'react';

const CountrySearchHistory = () => {

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
          <table class="table">
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>remove</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>remove</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>remove</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default CountrySearchHistory;