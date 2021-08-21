import React, { Component }  from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

function MapBox(){
    const mapContainerStyle = {
        width: "100%",
        height: "700px",
    };

    const center = {
        lat: 43.684070,
        lng: -79.399015,
    };

    const options = {
        minZoom: 11,
        maxZoom: 16,
        disableDefaultUI: true,
        zoomControl: true,
    };

    const libraries = ['places'];

    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyC_93cil1U6loBTf_1_tZMDQPmJ49SaH2o",
        libraries,
    });


    if (loadError) return "Error while loading map";
    if (!isLoaded) return "Loading Map";

    return (
        <div　class='w-3/5 h-4/5 px-10 float-left'>
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            center={center} 
            zoom={11}
            options={options}>
                
            </GoogleMap>
        </div>

    );
}

export default MapBox;