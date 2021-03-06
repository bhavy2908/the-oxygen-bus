import React, { Component, useState } from 'react';
import { Map, Marker, GoogleApiWrapper, Polyline, InfoWindow } from 'google-maps-react';
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: { lat: 28.669, lng: 77.2090 },
        isOpen: true
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
    distance = (lat1, lat2, lon1, lon2) => {
        lon1 = lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2), 2);

        let c = 2 * Math.asin(Math.sqrt(a));
        let r = 6371;

        return (c * r);
    };
    TotalDis = (list) => {
        var distn = 0;
        for (let i = 0; i < list.length - 1; i++) {
            distn += this.distance(list[i].lat, list[i + 1].lat, list[i].lng, list[i + 1].lng);
        }
        return distn
    };


    permutations = (arr) => {
        if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
        return arr.reduce(
            (acc, item, i) =>
                acc.concat(
                    this.permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                        item,
                        ...val,
                    ])
                ),

            []

        );

    };

    shortestPath = (list, temp2 = [], first = { lat: 28.619319, lng: 77.100216 }, last = { lat: 28.717, lng: 77.32 }, finalDis = Number.MAX_SAFE_INTEGER, tempDis = 0, finalList = []) => {
        for (let i = 0; i < list.length; i++) {
            let temp = list[i]
            temp2.push(first)
            for (let j = 0; j < temp.length; j++) {
                temp2.push(temp[j])
            }
            temp2.push(last)
            tempDis = this.TotalDis(temp2)
            if (tempDis < finalDis) {
                finalDis = tempDis
                finalList = temp2
            }
            temp2 = []
        }
        return finalList
    };

    shortestDis = (list, first, last, finalDis = Number.MAX_SAFE_INTEGER, tempDis = 0, finalList = [], temp2 = []) => {
        for (let i = 0; i < list.length; i++) {
            let temp = list[i]
            temp2.push(first)
            for (let j = 0; j < temp.length; j++) {
                temp2.push(temp[j])
            }
            temp2.push(last)
            tempDis = this.TotalDis(temp2)
            if (tempDis < finalDis) {
                finalDis = tempDis
                finalList = temp2
            }
            temp2 = []
        }
        return finalList
    };

    Dijkstra = (Hospitals, Oxygen, result = []) => {
        let NumH = this.props.num1
        let CapH = this.props.num2
        let NumO = this.props.num3
        let CapO = this.props.num4
        let CapBus = this.props.num5
        if ((NumH * CapH) <= ((NumO * CapO) + CapBus)) {
            let StationsReq = Math.floor(((NumH * CapH) - CapBus) / CapO)
            console.log("Stations Required : " + StationsReq)
            let initial = Math.floor(CapBus / CapH) + 1
            for (let i = 0; i < initial - 1; i++) {
                result.push(Hospitals[i])
            }
            let startend = [Hospitals[initial - 1], Hospitals[initial]]
            console.log(startend)
            let MinDis = Number.MAX_SAFE_INTEGER
            let NodeValue = 99
            let DisFromStart = 0
            let DisFromEnd = 0
            let TotalDis = 0
            let temp = []
            for (let j = 0; j < StationsReq; j++) {
                for (let i = 0; i < Oxygen.length; i++) {
                    if (temp.includes(Oxygen[i])) {
                        console.log("pass")
                    }
                    else {
                        DisFromStart = this.distance(startend[0].lat, Oxygen[i].lat, startend[0].lng, Oxygen[i].lng)
                        DisFromEnd = this.distance(startend[1].lat, Oxygen[i].lat, startend[1].lng, Oxygen[i].lng)
                        TotalDis = DisFromStart + DisFromEnd
                        if (TotalDis < MinDis) {
                            MinDis = TotalDis
                            NodeValue = i
                        }
                    }
                }
                temp.push(Oxygen[NodeValue])
                startend[0] = Oxygen[NodeValue]
                MinDis = Number.MAX_SAFE_INTEGER
            }
            console.log(temp)
            let perm = this.permutations(temp)
            let temp2 = this.shortestDis(perm, Hospitals[initial - 1], Hospitals[initial])
            console.log(temp2)
            for (let i = 0; i < temp2.length; i++) {
                result.push(temp2[i])
            }
            for (let i = initial + 1; i < Hospitals.length; i++) {
                result.push(Hospitals[i])
            }
            console.log(result)
            return result
        }
        else {
            console.log("No Possible Solution")
            return []
        }
    };





    render() {




        const temp = [{ lat: 28.649319, lng: 77.169316 }, { lat: 28.612295, lng: 77.28936 }, { lat: 28.654441, lng: 77.26142 }, { lat: 28.685337, lng: 77.140324 }, { lat: 28.705645, lng: 77.190577 }, { lat: 28.714892, lng: 77.06897 }, { lat: 28.616247, lng: 77.187487 }, { lat: 28.67, lng: 77.23567 }, { lat: 28.73, lng: 77.2598 }]
        const Hmarks = [{}]
        const Omarks = [{}]
        const temp2 = [{ lat: 28.660702, lng: 77.11 }, { lat: 28.653164, lng: 77.229715 }, { lat: 28.699798, lng: 77.246143 }, { lat: 28.681354, lng: 77.178203 }, { lat: 28.632655, lng: 77.253817 }, { lat: 28.65, lng: 77.3 }, { lat: 28.6578, lng: 77.2 }, { lat: 28.62134, lng: 77.2098 }, { lat: 28.6333, lng: 77.3333 }]
        const result = [{ lat: 28.619319, lng: 77.100216 }]
        const temp3 = [{ lat: 28.717, lng: 77.32 }]
        let permutedarrays = [];
        for (let i = 0; i < this.props.num1; i++) {
            Hmarks[i] = temp[i];
        }
        for (let i = 0; i < this.props.num3; i++) {
            Omarks[i] = temp2[i];
        }
        for (let i = 1; i < this.props.num6 - this.props.num3 + 1; i++) {
            result[i] = Hmarks[i - 1];

        }
        let result2 = [];
        for (let i = 0; i < result.length - 1; i++) {
            result2[i] = result[i + 1];
        }
        if (result[1]) {
            result.push(temp3[0])
            console.log("Total Distance Covered = " + this.TotalDis(result) + " Km")
        }
        let finalList = []
        if (this.props.num6) {
            permutedarrays = this.permutations(result2)
            if (this.props.num5 >= (this.props.num1 * this.props.num2)) {
                finalList = this.shortestPath(permutedarrays)
            }
            else {
                const tempList = this.shortestPath(permutedarrays)
                finalList = this.Dijkstra(tempList, Omarks)
            }
        }



        return (
            
            <Map google={this.props.google}
                onClick={this.onMapClicked}
                initialCenter={{ lat: this.state.mapCenter, lng: this.state.mapCenter }}
                zoom={12.55}
                style={{ width: '79.75%', height: '90vh' }}
            >
                <Marker position={{ lat: 28.619319, lng: 77.100216 }}
                    onClick={this.onMarkerClick}
                    name={'Starting Point'}

                    icon={{ url: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png" }} />

                {Hmarks.map((item) => (<Marker position={item}
                    onClick={this.onMarkerClick}
                    icon={{ url: "http://maps.google.com/mapfiles/ms/micons/red-dot.png" }}
                    name={'Requirement : ' + this.props.num2} />))}
                {Omarks.map((item) => (<Marker position={item}
                    onClick={this.onMarkerClick}
                    icon={{ url: "http://maps.google.com/mapfiles/ms/micons/blue-dot.png" }}
                    name={'Availability : '+ this.props.num4} />))}
                <Marker position={{ lat: 28.717, lng: 77.32 }}
                    onClick={this.onMarkerClick}
                    icon={{ url: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png" }}
                    name={'End Point'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>

                <Polyline
                    path={finalList}
                    geodesic={true}
                    options={{
                        strokeColor: "white",
                        strokeOpacity: 1,
                        strokeWeight: 5,

                    }}
                />

            </Map>
            
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBDyZq2971YCZsNf9fIqSw-l0NPagBLm-w')
})(MapContainer)
