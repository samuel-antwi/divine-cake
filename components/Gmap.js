import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',
    }}>
    {text}
  </div>
);

class Gmap extends React.Component {
  static defaultProps = {
    center: { lat: 5.59, lng: -0.2 },
    zoom: 16,
  };

  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY, language: 'en' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={5.59041061251686}
            lng={-0.209780680015683}
            text={'Devinecakesgh'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;
