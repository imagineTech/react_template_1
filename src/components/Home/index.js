import React, {Component} from 'react';
import HomeContent from './Content';

class HomeContainer extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <HomeContent/>
    )
  }
}

export default HomeContainer;