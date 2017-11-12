import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/skincarelogo.png'
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="header">
      	 <img className="logo" src={Logo} alt=""/>
         <h1>Christina's Skin Care</h1>
        </div>
      	<div className="navBar">
	      	<NavLink exact to="/" activeClassName="selected">Home</NavLink>
	      	<NavLink to="/services" activeClassName="selected">Services</NavLink>
	      	<NavLink to="/location&contact" activeClassName="selected">Location & Contact</NavLink>
	      	<NavLink to="/policies" activeClassName="selected">Policies</NavLink>
      	</div>
      </div>
    )
  }
}

export default Header