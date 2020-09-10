import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Persons/Person1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Lord!</h1>
        <Person name="Biswa" >Hello Everyone</Person>
        <Person name="Deepak"/>
        <Person name="pk"/>
        <Person name="Dev"/>
      </div>
    );
  }
}

export default App;
