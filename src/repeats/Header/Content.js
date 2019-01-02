import React, {Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

class HeaderContent extends Component {
  constructor() {
    super();
    this.state = {
      menuWillOpen: true
    }
  }

  openNav() {
    this.changeMenu();
    document.getElementById("sideNav").style.width = "160px";
    document.getElementById("sideNav").style.paddingLeft = "4px";
    this.setState({menuWillOpen: !this.state.menuWillOpen});
  }

  closeNav() {
    this.changeMenu();
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav").style.paddingLeft = "0";
    this.setState({menuWillOpen: !this.state.menuWillOpen});
  }

  changeMenu() {
    this.refs.hamMenu.classList.toggle('change');
  }

  hamClick() {
    this.state.menuWillOpen?
    this.openNav():
    this.closeNav();
  }

  render() {
    return (
      <div id='header'>
        <span>React Template 1</span>
        <div id="sideNav" className="sideNav">
          <Link to={'/'} className='navLink' onClick={() => this.closeNav()}>Home</Link>
          <Link to={'/about'} className='navLink' onClick={() => this.closeNav()}>About</Link>
          <Link to={'/contact'} className='navLink' onClick={() => this.closeNav()}>Contact</Link>
          <Link to={'/services'} className='navLink' onClick={() => this.closeNav()}>Services</Link>
        </div>
        <div className='hamContainer' ref='hamMenu' onClick={() => this.hamClick()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    )
  }
}

export default HeaderContent;