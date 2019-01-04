import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './screens/Root';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={'/react_template_1/'}>
    <Root />
  </BrowserRouter>
  , document.getElementById('root'));