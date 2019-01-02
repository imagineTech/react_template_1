import React, {Component} from 'react';
import './Contact.css';
import contentImage from '../../assets/contactTop.png';

export default class ContactForm extends Component {

  render() {
    return (
      <div id='contactPage'>
        <div className='topContactContainer'>
          <img className='contactImage' alt='contactImage' src={contentImage}/>
          <div className='contactTitle'>Contact Page</div>
        </div>
        <div className='contactBottom'>
          <div className='contactHalf'>
            <h1>Contact Us!</h1>
            <p>Aenean sodales, quam quis ultricies blandit, est leo vehicula elit, quis tristique nunc enim at neque. In a dolor at enim molestie suscipit. In sit amet feugiat lacus. Maecenas nec luctus est. Donec et erat in est volutpat ornare quis eget libero. Curabitur iaculis lacus feugiat laoreet tempor. Phasellus congue nisi felis, at elementum ligula convallis sit amet. Pellentesque in risus vitae lectus pretium dictum. Aliquam consequat augue ligula, quis lacinia justo hendrerit vel. Nulla mauris ante, ullamcorper eu laoreet sed, faucibus a libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce et nisl at metus pretium bibendum. Curabitur pharetra, ante quis facilisis tincidunt, purus quam placerat turpis, eget luctus nisi risus eu eros. Duis commodo tortor felis, a dictum quam vestibulum sed. Nulla aliquam luctus quam, a dapibus tellus faucibus ac.</p>
          </div>
          <div className='contactHalf'>
            <div>
              <p>Name</p>
              <input className='contactInput'/>
            </div>
            <div>
              <p>Email</p>
              <input className='contactInput'/>
            </div>
            <div>
              <p>Subject</p>
              <input className='contactInput'/>
            </div>
            <div>
              <p>Message</p>
              <textarea className='contactMessage'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}