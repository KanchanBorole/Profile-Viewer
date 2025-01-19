import React, { useState } from "react";
import './App.css';
import Map from "./Componenets/Map";
import Header from "./Components/Header";
import ProfileList from "./Components/ProfileList";
import profiles from "./data/profiles";


const App = () => { const [selectedAddress, setSelectedAddress] = useState(null); return ( <div> <Header /> <div style={{ display: "flex", flexWrap: "wrap" }}> <ProfileList profiles={profiles} onSelectAddress={setSelectedAddress} /> <Map selectedAddress={selectedAddress} /> </div> </div> ); }; 


export default App;
