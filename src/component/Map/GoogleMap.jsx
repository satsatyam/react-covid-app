import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{width:'100%',height:"100%"}}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'GOOGLE_API_KEY'
})(GoogleMap);