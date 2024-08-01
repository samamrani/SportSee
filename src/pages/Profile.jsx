import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

function Profile() {
  const { id } = useParams();


  return <Home userId={id} />;
}

export default Profile;
