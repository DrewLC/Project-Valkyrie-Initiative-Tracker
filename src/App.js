import React, { Component } from 'react';
import logo from './Valkyrie_Logo.svg';
import './App.css';

import Battle from './Battle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PV Inititiative Tracker</h1>
        </header>
        <p className="App-intro">
          This is a tool for the ongoing WIP tabletop RPG, Project Valkyrie.
        </p>
        <Battle />
      </div>
    );
  }
}

export default App;
