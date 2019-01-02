import React, {Component} from 'react';
import ServicesContent from './Content';

class ServicesContainer extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <ServicesContent/>
    )
  }
}

export default ServicesContainer;