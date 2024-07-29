import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserMainInfo from './UserMainInfo';
import Home from '../pages/Home.jsx';

import '../styles/main.scss';


const userProfiles = [
  { id: '12', name: 'Karl' },
  { id: '18', name: 'Cecilia' }
];

const UserSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileChange = (userId) => {
    if (userId) {
      navigate(`/user/${userId}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="user-selector">
      <div
        className="user-selector__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        Profil
      </div>
      {isOpen && (
        <div className="user-selector__menu">
          {userProfiles.map(user => (
            <div
              key={user.id}
              className="user-selector__menu-item"
              onClick={() => handleProfileChange(user.id)}
            >
              Profil {user.name}
            </div>
          ))}
        </div>
      )}
     {/* {selectedUserId && <UserMainInfo userId={selectedUserId} />}
      {selectedUserId && <Home userId={selectedUserId} />}  */}
    </div>
  );
};

export default UserSelector;
