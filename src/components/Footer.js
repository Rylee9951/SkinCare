import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import '../styles/footer.css'
import 'font-awesome/css/font-awesome.min.css';
import Location from './Location'

class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="footerContainer">
          <div className="footer">
          	<div className="footerNavBar">
    	      	<a href="https://www.facebook.com/christinasskincare"><i className="fa fa-facebook-square"></i></a>
          	</div>
          	<div className="location">
          		<h3>Location</h3>
          		<Location />
          	</div>
          	<div className="contact">
          		<h3>Contact</h3>
          		<p><a href="https://www.google.com/maps/place/20632+Redwood+Rd+c,+Castro+Valley,+CA+94546/@37.6961611,-122.0756852,17z/data=!3m1!4b1!4m5!3m4!1s0x808f922ff6fdb0b9:0xe78a9f45597e697b!8m2!3d37.6961569!4d-122.0734965">20632 Redwood Road Suite C<br/>Castro Valley CA 94546</a></p>
          		<p>510-583-1965</p>
          		<p><a href="mailto:christinamandrade@gmail.com">christinamandrade@gmail.com</a></p>
          	</div>
          </div>
          <div><p className="cancellation">**Christina's Skin Care requires a 24-hour notice of cancellation. If any last minute cancelations are made in under 24 hours, they will be charged the full price of their service. No shows are considered a service rendered and charged as such.</p></div>
        </div>
      </div>
    )
  }
}

export default Footer