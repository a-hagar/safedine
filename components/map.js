import React, { useRef, useState, } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { render } from "react-dom";
import { Component } from "react/cjs/react.production.min";

export default class MapBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render(){

        
        const mapContainerStyle = {
            width: "100%",
            height: "700px",
        };
    
        const center = {
            lat: this.props.userLocation.latitude,
            lng: this.props.userLocation.longitude,
        };
    
        const options = {
            minZoom: 12,
            maxZoom: 20,
            disableDefaultUI: true,
            zoomControl: true,
        };

        const onLoad = marker => {
            console.log('marker: ', marker)
          }
    
        return (
            <div className='w-3/5 h-4/5 px-10 float-left'>
            <LoadScript googleMapsApiKey="">
                <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                center={center}
                zoom={19}            
                options={options}>
                     {this.props.data.map(business => <Marker key={business.id} 
                     position={{lat: business.coordinates.latitude, lng:business.coordinates.longitude }}>
                    <InfoWindow
                    position={{lat: business.coordinates.latitude, lng:business.coordinates.longitude }}
                    onCloseClick={this.onInfoWindowClose}
                    >
                        <div>
                            <p>{business.name}</p>
                            <p>{business.rating}🟊</p>
                            <p>{business.price}</p>
                            <p>{business.location.address1} {business.location.address2}</p> 
                            <p>{Math.round(business.distance)}m Away</p>
                        </div>
                    </InfoWindow>
                     </Marker>)}
                </GoogleMap>
                </LoadScript>
            </div>
        );
    }

}

