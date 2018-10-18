import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 60.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        let user = this.props.user
        let lat = parseFloat(user.location.coordinates.latitude)
        let lng = parseFloat(user.location.coordinates.longitude)
        console.log(lat, ' ini lat loh')
        console.log('user dari goole maps', this.props.center)
        let obj = {
            lat,
            lng
        }
        console.log(obj)
        // this.props.center.lat = lat
        // this.props.center.lng = lng
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '200px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDs8UU3bvbAlw7fZPYRV67UxcPpv1ZTpeA' }}
                    defaultCenter={obj}
                    // defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={lat}
                        lng={lng}
                        text={''}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;