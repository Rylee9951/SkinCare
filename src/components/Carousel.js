import React, { Component } from 'react'
import Carousel from 'react-image-carousel';
import '../styles/carousel.css'
import Shop1 from '../images/shop1.png'
import Shop2 from '../images/shop2.png'
import Shop3 from '../images/shop3.png'
import CloseUp from '../images/closeup.png'

let images = [
    CloseUp,
    Shop1,
    Shop2,
    Shop3
]

class MyCarousel extends Component {

  render() {
    return (
      <div className="myCarousel">
      	<Carousel className="carousel" images={images} thumb={true} loop={true} autoplay={3000}/>
      </div>
    )
  }
}

export default MyCarousel