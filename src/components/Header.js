import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/skincarelogo.png'
import '../styles/header.css'
import '../styles/home.css'

class Header extends Component {
  render() {
    return (
      <div >
        <div className="headerContainer">
          <div className="header">
        	 <img className="logo" src={Logo} alt=""/>
           <h1>Christina's Skin Care</h1>
          </div>
        	<div className="navBar">
  	      	<NavLink exact to="/" activeClassName="selected">Home</NavLink>
  	      	<NavLink to="/services" activeClassName="selected">Services</NavLink>
  	      	<NavLink to="/policies" activeClassName="selected">Policies</NavLink>
        	</div>
        </div>
      </div>
    )
  }
}

export default Header