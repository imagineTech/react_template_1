import React, { Component } from 'react';
import Screens from './screens/Root';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {Screens}
        <Footer/>
      </div>
    );
  }
}

export default App;
