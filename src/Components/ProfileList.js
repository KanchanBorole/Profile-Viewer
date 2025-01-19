import React from 'react';
import ProfileCard from './ProfileCard';
const ProfileList = ({profiles, onSelectAddress}) => (
  <div style={{flex: 2, display: 'grid', gap: '1rem'}}>
    {' '}
    {profiles.map (profile => (
      <ProfileCard
        key={profile.id}
        profile={profile}
        onSelect={onSelectAddress}
      />
    ))}
    {' '}
  </div>
);
export default ProfileList;
