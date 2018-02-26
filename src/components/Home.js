import React, { Component } from 'react';
import Carousel from './Carousel'
import Services from './Services'
import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="home">
            <div className="about">
              <div className="aboutText">
                <h2>About Christina</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sit! Ut corporis, minima est magni, impedit, enim voluptate, delectus soluta dignissimos similique consectetur perferendis. Itaque nisi delectus, id eos velit!</p>
              </div>
            </div>
            <div className="about">
              <div className="aboutText">
                <h2>About Cristina's Skin Care</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vitae nisi, fuga quis iure, ipsa! Obcaecati tempora eum eos. Nisi veritatis quis, cumque modi? Maxime provident tenetur debitis, ipsam aliquam.</p>
              </div>
            </div>
          </div>
          <div>
            <Carousel />
          </div>
          <Services />
        </div>
      </div>
    );
  }
}

export default Home;
