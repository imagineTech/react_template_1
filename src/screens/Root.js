import React, {Component} from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Header from '../repeats/Header'
import Footer from '../repeats/Footer';
import {Route, Switch} from 'react-router-dom';

class ScreenRoot extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/about'} component={About}/>
          <Route path={'/contact'} component={Contact}/>
          <Route path={'/services'} component={Services}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default ScreenRoot;