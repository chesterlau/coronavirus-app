import React from 'react';
import './App.css';
import CountrySearch from '../CountrySearch/CountrySearch';

function App() {
  return (
    <div className="container" style={{marginTop: "2%"}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CountrySearch />
    </div>
  );
}

export default App;
