import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    <br />
        <a
          className="App-link"
          href="https://www.iaditya.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          iAditya.com
        </a>
      </header>
    </div>
  );
}

function Hello() {
  return <div>Hello React!</div>;
}

// ReactDOM.render(
//   '<Hello />',
//   document.getElementById('mountNode')
// );

export default App;
