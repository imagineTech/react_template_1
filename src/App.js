import React, { Component } from 'react';
import Screens from './screens/Root'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Screens}
      </div>
    );
  }
}

export default App;
