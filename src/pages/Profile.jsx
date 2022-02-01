import React, { useContext } from 'react';
import { useAuthContext } from '../context/AuthContext';

function Profile() {
  const { userData } = useAuthContext();

  return (
    <div>
      <h1>Profile</h1>
      <p>{userData.user.displayName}</p>
    </div>
  );
}

export default Profile;
