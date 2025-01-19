import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
const Map = ({ selectedAddress }) => {
     const mapStyles = { width: "100%", height: "500px" };
      const defaultCenter = { lat: 37.3861, lng: -122.0839 }; 
      
      return (
        <div style={{ flex: 1 }}> <LoadScript googleMapsApiKey="Google Maps API key">
     <GoogleMap mapContainerStyle={mapStyles} zoom={12} 
     center={defaultCenter}> {selectedAddress && <Marker position={selectedAddress} />}
      </GoogleMap> 
      </LoadScript> 
      </div> ); }; 
      
      export default Map;