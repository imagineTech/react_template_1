import React, {Component} from 'react';
import './About.css';
import aboutImage from '../../assets/people2.png';

class AboutContent extends Component {
  
  render() {
    return (
      <div id='aboutPage'>
        <div className='topAboutContainer'>
          <img className='aboutImage' alt='aboutImage' src={aboutImage}/>
          <div className='aboutTitle'>About Page</div>
        </div>
      </div>
    )
  }
}

export default AboutContent;