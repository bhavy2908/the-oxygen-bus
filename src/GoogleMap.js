import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: { lat: 28.51935074870835, lng: 77.36524524013548 },
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (



            <Map google={this.props.google}
                onClick={this.onMapClicked}
                initialCenter={{ lat: this.state.mapCenter, lng: this.state.mapCenter }}
                zoomLevel={2}
                onClick
                style={{ width: '79.75%', height: '90vh' }}


            >

                <Marker onClick={this.onMarkerClick} position={this.state.mapCenter}
                    name={'location 1'} num6 />
                <Marker position={{ lat: 28.6304714220619, lng: 77.37215398332658 }}
                    onClick={this.onMarkerClick}
                    name={'location 2'} />
                <Marker position={{ lat: 28.64500917557668, lng: 77.28369897322511 }}
                    onClick={this.onMarkerClick}
                    name={'location 3'} />
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBDyZq2971YCZsNf9fIqSw-l0NPagBLm-w')
})(MapContainer)
