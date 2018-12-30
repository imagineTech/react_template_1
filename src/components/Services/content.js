import React, {Component} from 'react';
import './Services.css'
import servicesImage from '../../assets/servicesTop.png';
import development from '../../assets/servicesDevelopment.png';
import marketing from '../../assets/servicesMarketing.png';
import branding from '../../assets/servicesBranding.png';
import growth from '../../assets/servicesGrowth.png';

class ServicesContent extends Component {

  render() {
    return (
      <div id='servicesPage'>
        <div className='topServicesContainer'>
          <img className='servicesImage' alt='servicesImage' src={servicesImage}/>
          <div className='servicesTitle'>Services Page</div>
        </div>
        <div className='servicesSmallParaContainer'>
          <div className='servicesSegment'>
            <h1>Development</h1>
            <img className='segmentImage' src={development} alt='development'/>
            <p>Etiam sed justo quis ipsum posuere condimentum. Quisque a pharetra enim, ut aliquet arcu. Nulla eleifend aliquet tellus, nec dapibus dui egestas in. Curabitur lobortis ipsum neque, vitae vulputate sapien consequat id. Ut hendrerit malesuada nibh, quis sagittis mauris lobortis quis. Praesent vel tortor nisi. Integer lacinia, ex ut congue dignissim, ante sem convallis nisl, volutpat efficitur dui urna at arcu. Quisque imperdiet ultrices aliquet.</p>
          </div>
          <div className='servicesSegment'>
            <h1>Marketing</h1>
            <img className='segmentImage' src={marketing} alt='marketing'/>
            <p>Nulla facilisi. Curabitur sit amet consectetur erat. Etiam vel lorem ac lorem commodo ullamcorper imperdiet a neque. In sit amet finibus justo. Cras leo nulla, viverra eget condimentum ut, euismod ut mauris. Sed porttitor nisl sed tincidunt sodales. Sed finibus, lorem a vehicula pharetra, tortor justo tristique erat, in fermentum tellus justo sit amet orci. Phasellus congue est nec enim mattis feugiat. Sed non nunc lacus. Curabitur efficitur blandit blandit.</p>
          </div>
          <div className='servicesSegment'>
            <h1>Branding</h1>
            <img className='segmentImage' src={branding} alt='branding'/>
            <p>Curabitur eget mauris ac diam pharetra semper sed eu eros. Donec luctus orci ex. In nulla lacus, commodo at dui a, posuere aliquet urna. Mauris molestie a tellus quis semper. Curabitur et augue dolor. In ut feugiat justo. Fusce vel odio nec massa sodales vehicula et a purus. Mauris sagittis interdum odio, vel gravida magna pellentesque id. Donec at luctus orci, id ultrices sem. Cras ante turpis, luctus id blandit a, feugiat in neque.</p>
          </div>
          <div className='servicesSegment'>
            <h1>Growth</h1>
            <img className='segmentImage' src={growth} alt='growth'/>
            <p>Fusce et purus dapibus, maximus mauris eget, ornare dolor. Aenean nec sapien massa. Duis viverra rutrum semper. Integer laoreet, turpis sed consequat fringilla, neque dui pellentesque dolor, quis ornare purus neque ac dui. Maecenas at libero erat. Phasellus tempor, ante eget accumsan iaculis, tortor sapien viverra libero, non mattis turpis urna et risus. Praesent pulvinar lorem sed ornare placerat. Curabitur varius fermentum lectus, a ultrices mauris imperdiet eu.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesContent;