import React, {Component} from 'react';
import AboutContent from './Content';

class AboutContainer extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <AboutContent/>
    )
  }
}

export default AboutContainer;