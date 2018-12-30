import React, {Component} from 'react';
import './About.css';
import aboutImage from '../../assets/aboutTop.png';
import strategy from '../../assets/aboutStrategy.png';
import design from '../../assets/aboutDesign.png';
import technology from '../../assets/aboutTechnology.png';

class AboutContent extends Component {
  
  render() {
    return (
      <div id='aboutPage'>
        <div className='topAboutContainer'>
          <img className='aboutImage' alt='aboutImage' src={aboutImage}/>
          <div className='aboutTitle'>About Page</div>
        </div>
        <div className='quoteContainer'>
          <div className='aboutQuote'>"Some slogan or quote from the company"</div>
        </div>
        <div className='aboutSmallParaContainer'>
          <div className='aboutSegment'>
            <img className='segmentImage' src={strategy} alt='strategy'/>
            <h1>Strategy</h1>
            <p>Cras dapibus volutpat molestie. Pellentesque condimentum tristique pulvinar. Sed dapibus dictum est, vitae sollicitudin felis hendrerit et. Sed purus nunc, tristique sit amet eros aliquam, tristique congue risus. Mauris luctus eros at odio bibendum, non pellentesque libero placerat. Aenean ullamcorper commodo porttitor. Mauris id tempor mi, ut ornare eros.</p>            </div>
          <div className='aboutSegment'>
            <img className='segmentImage' src={design} alt='design'/>
            <h1>Design</h1>
            <p>Maecenas auctor quam dolor, nec sagittis magna porttitor sit amet. Ut id lectus augue. Phasellus velit tellus, feugiat sit amet semper a, aliquam at odio. Maecenas pellentesque elit vitae blandit lacinia. Nulla accumsan ante aliquam vulputate vehicula. Aenean porttitor arcu risus, in sodales tellus semper ut. Pellentesque rutrum sit amet nisi vitae viverra.</p>
          </div>
          <div className='aboutSegment'>
            <img className='segmentImage' src={technology} alt='technology'/>
            <h1>Technology</h1>
            <p>Nullam laoreet lacus ligula, suscipit egestas sem scelerisque eget. Aenean bibendum eleifend quam id condimentum. Donec non elementum tellus. Nunc nec dolor a justo imperdiet consectetur. Sed fringilla tortor eu turpis fringilla, in volutpat risus dapibus. Phasellus libero metus, cursus in vestibulum sed, convallis nec elit. Maecenas vitae lorem lacinia, ultrices nulla et, lacinia justo.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContent;