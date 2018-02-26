import React, { Component } from 'react'
import '../styles/footer.css'
import Logo from '../images/skincarelogo.png'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ image }) => <img className="logoFooter" src={ image } alt=""/>;

class Location extends Component {
	static defaultProps = {
    center: { lat: 37.696208, lng: -122.073507 },
    zoom: 15

  }
  render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 37.696208 }
            lng={ -122.073507 }
            image={ Logo }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Location