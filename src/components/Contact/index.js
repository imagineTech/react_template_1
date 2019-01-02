import React, {Component} from 'react';
import ContactForm from './Content';

export default class ContactContainer extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <ContactForm/>
    )
  }
}