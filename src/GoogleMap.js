import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, Polyline, InfoWindow } from 'google-maps-react';


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: { lat: 28.669, lng: 77.2090 },
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
        return distn;
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
    }

    Dijkstra = (num1, num2, num3, num4, num5, numtemp, start, end, Hlist, Olist, final = [], count = 0, tempDis1 = 0, tempDis2 = 0, maxDis1 = Number.MAX_SAFE_INTEGER, maxDis2 = Number.MAX_SAFE_INTEGER, value1, value2, multilist = [], templist = []) => {
        if ((num5 + (this.props.num3 * num4)) >= num1 * num2) {
            let x = num5 / num2
            let stationsReq = ((num1 * num2) - num5) / num4
            stationsReq = Math.ceil(stationsReq)
            if (numtemp == 0) {
                console.log('Stations Required = ' + stationsReq)
                for (let i = 0; i < x + 1; i++) {
                    final[i] = Hlist[i]
                    count++
                }
                start = Hlist[count]
                end = Hlist[count + 1]
            }
            if (stationsReq == 1) {
                for (let i = 0; i < num3; i++) {
                    if ((Olist[i] != start) && (Olist[i] != end)) {
                        tempDis1 = this.distance(start.lat, Olist[i].lat, start.lng, Olist[i].lng)
                        tempDis2 = this.distance(end.lat, Olist[i].lat, end.lng, Olist[i].lng)
                        if (tempDis1 < tempDis2) {
                            if (tempDis1 < maxDis1) {
                                maxDis1 = tempDis1
                                value1 = i
                            }
                        }
                        else {
                            if (tempDis2 < maxDis1) {
                                maxDis1 = tempDis2
                                value1 = i
                            }
                        }
                    }
                }
                final.push(Olist[value1])
            }
            if (stationsReq == 2) {
                for (let i = 0; i < num3; i++) {
                    if ((Olist[i] != start) && (Olist[i] != end)) {
                        tempDis1 = this.distance(start.lat, Olist[i].lat, start.lng, Olist[i].lng)
                        tempDis2 = this.distance(end.lat, Olist[i].lat, end.lng, Olist[i].lng)

                        if (tempDis1 < maxDis1) {
                            maxDis1 = tempDis1
                            value1 = i
                        }
                        else if (tempDis2 < maxDis2) {
                            maxDis2 = tempDis2
                            value2 = i
                        }
                    }

                }
                let tempz = value1
                value1 = value2
                value2 = tempz
                let temzlist = [Hlist[count - 1], Olist[value2], Olist[value1], Hlist[count]]
                let temzlist2 = [Hlist[count - 1], Olist[value1], Olist[value2], Hlist[count]]
                if (this.TotalDis(temzlist) < this.TotalDis(temzlist2)) {
                    let tempz2 = value2
                    value2 = value1
                    value1 = tempz2
                }
                final.push(Olist[value1])
                final.push(Olist[value2])
            }
            if (stationsReq > 2 && stationsReq % 2 != 0) {
                let temptemp = []
                for (let j = 0; j < Math.floor(stationsReq / 2); j++) {
                    for (let i = 0; i < Olist.length; i++) {
                        if ((Olist[i] != start) && (Olist[i] != end)) {
                            tempDis1 = this.distance(start.lat, Olist[i].lat, start.lng, Olist[i].lng)
                            tempDis2 = this.distance(end.lat, Olist[i].lat, end.lng, Olist[i].lng)

                            if (tempDis1 < maxDis1) {
                                maxDis1 = tempDis1
                                value1 = i
                            }
                            else if (tempDis2 < maxDis2) {
                                maxDis2 = tempDis2
                                value2 = i
                            }
                        }

                    }

                    let tempz = value1
                    value1 = value2
                    value2 = tempz
                    let temzlist = [Hlist[count - 1], Olist[value2], Olist[value1], Hlist[count]]
                    let temzlist2 = [Hlist[count - 1], Olist[value1], Olist[value2], Hlist[count]]
                    if (this.TotalDis(temzlist) < this.TotalDis(temzlist2)) {
                        let tempz2 = value2
                        value2 = value1
                        value1 = tempz2
                    }
                    temptemp.push(Olist[value1])
                    temptemp.push(Olist[value2])
                }
            }
            if (stationsReq > 2 && stationsReq % 2 == 0) {
                console.log('Entered in if statement')
                let temptemp = []
                for (let j = 0; j < stationsReq / 2; j++) {
                    console.log('1st for loop')
                    for (let i = 0; i < Olist.length; i++) {
                        if ((Olist[i].lat != start.lat) && (Olist[i].lat != end.lat)) {
                            tempDis1 = this.distance(start.lat, Olist[i].lat, start.lng, Olist[i].lng)
                            tempDis2 = this.distance(end.lat, Olist[i].lat, end.lng, Olist[i].lng)

                            if (tempDis1 < maxDis1) {
                                maxDis1 = tempDis1
                                value1 = i
                            }
                            else if (tempDis2 < maxDis2) {
                                maxDis2 = tempDis2
                                value2 = i
                            }
                        }

                    }
                    

                    let tempz = value1
                    value1 = value2
                    value2 = tempz
                    let temzlist = [Hlist[count - 1], Olist[value2], Olist[value1], Hlist[count]]
                    let temzlist2 = [Hlist[count - 1], Olist[value1], Olist[value2], Hlist[count]]
                    if (this.TotalDis(temzlist) < this.TotalDis(temzlist2)) {
                        let tempz2 = value2
                        value2 = value1
                        value1 = tempz2
                    }
                    start.lat = Olist[value1].lat
                    start.lng = Olist[value1].lng
                    end.lat = Olist[value2].lat
                    end.lng = Olist[value2].lng
                    temptemp.push(Olist[value1])
                    temptemp.push(Olist[value2])
                    console.log(temptemp)
                }
                console.log(final)
                for (let i = 0; i < temptemp.length / 2; i += 2) {
                    final.push(temptemp[i])
                }
                for (let i = temptemp.length; i < temptemp.length / 2; i -= 2) {
                    final.push(temptemp[i])
                }
                console.log(final)

            }
            if (numtemp == 0) {

                for (let i = 0; i < (Hlist.length - x - 1); i++) {
                    final.push(Hlist[count])
                    count++
                }
            }

            return final
        }
    }




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
            console.log(permutedarrays)
            if (this.props.num5 >= (this.props.num1 * this.props.num2)) {
                finalList = this.shortestPath(permutedarrays)
            }
            else {
                const tempList = this.shortestPath(permutedarrays)
                finalList = this.Dijkstra(this.props.num1, this.props.num2, this.props.num3, this.props.num4, this.props.num5, 0, [], [], tempList, Omarks)
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
                    name={'Availability : 0'} />))}
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
