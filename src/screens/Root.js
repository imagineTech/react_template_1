import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import {Route, Switch} from 'react-router-dom';

export default (
  <Switch>
    <Route exact path={'/'} component={Home}/>
    <Route path={'/about'} component={About}/>
    <Route path={'/contact'} component={Contact}/>
    <Route path={'/services'} component={Services}/>
  </Switch>
)