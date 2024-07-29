import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
          <header className="App-header">
            <Menu />
            <h1>Welcome to my App</h1>
          </header>
    </div>
        <h1>Welcome to React</h1>

        <p></p>
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
