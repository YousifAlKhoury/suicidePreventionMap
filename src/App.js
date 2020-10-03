import React from 'react';
import './App.css';

import {GoogleMap, Marker, useLoadScript, InfoWindow} from '@react-google-maps/api'
import mapStyles from './mapStyles.js'

const libraries = ["places"];

const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries
  });

  if(loadError) return "Error loading maps"
  if(!isLoaded) return "Loading Maps";

  return (
    <div>
      <h1>Find mental health support available in your area using this interactive map.</h1>
      <GoogleMap
        mapContainerStyle = {mapContainerStyle} zoom={3} center = {{lat: 25, lng: 0}} options = {options}>

      </GoogleMap>
    </div>
  )
}

export default App;
