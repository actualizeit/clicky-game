import React from 'react';
import logo from './logo.svg';
import './App.css';
import{a} from './images/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={a} alt={a}></img>
        <p>
          Edit <code>src/App.js</code> and save to reloa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
