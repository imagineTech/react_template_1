import React, {Component} from 'react';
import './Header.css'

class HeaderContent extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: true
    }
  }

  openNav() {
    document.getElementById("sideNav").style.width = "126px";
    document.getElementById("sideNav").style.paddingLeft = "4px";
    this.setState({menuOpen: !this.state.menuOpen})
  }

  closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav").style.paddingLeft = "0";
    this.setState({menuOpen: !this.state.menuOpen})
  }

  changeMenu() {
    this.refs.hamMenu.classList.toggle('change');
  }

  hamClick() {
    console.log('hamClick hit')
    this.changeMenu()
    this.state.menuOpen?
    this.openNav():
    this.closeNav()
  }

  render() {
    return (
      <div id='header'>
        <span>React Template 1</span>
        <div id="sideNav" className="sideNav">
          <a href="javascript:void(0)" className="closeBtn" onClick={() => this.closeNav()}>&times;</a>
          {/* {this.props.user.user_id?
          <Link to={`/profile/${this.props.user.user_id}`} onClick={() => this.closeNav()}><img alt='profilePicture' className='headerProfilePic' src={this.props.user.user_pic}/></Link>:
          null
          }
          <div className='profile-login'>
          {this.props.user.user_id?
          <Link to={`/profile/${this.props.user.user_id}`} onClick={() => this.closeNav()}>Profile</Link>:
          null}
          {this.props.user.user_id?
          <a href={`${window.origin}/api/logout`} onClick={this.logout}>Logout</a>:
          <a onClick={this.login}>Login</a>}
          </div>
          <Nav closeNav={this.closeNav}/> */}
        </div>
        {/* <span className='hamburger' onClick={() => this.openNav()}>&#9776;</span> */}
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