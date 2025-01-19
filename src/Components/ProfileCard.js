import React from "react";
import "./ProfileCard.css";
const ProfileCard = ({ profile, onSelect }) => ( <div className="profile-card"> <img src={profile.photo} alt={profile.name} /> 
<h3>{profile.name}</h3>
<p>{profile.description}</p> 
<button onClick={() => onSelect(profile.address)}>Summary</button> </div> );


export default ProfileCard;
