import React, { useState, useEffect } from 'react';
import { USER_MAIN_DATA } from '../services/apiService'; 
import calorieIcon from '../assets/icon/calories-icon.png';
import carbsIcon from '../assets/icon/carbs-icon.png';
import lipidIcon from '../assets/icon/fat-icon.png';
import proteinIcon from '../assets/icon/protein-icon.png';
import '../styles/main.scss';

const keyDataMapping = [
  { key: 'calorieCount', label: 'Calories', icon: calorieIcon, unit: 'kCal' },
  { key: 'proteinCount', label: 'Protéines', icon: proteinIcon, unit: 'g' },
  { key: 'carbohydrateCount', label: 'Glucides', icon: carbsIcon, unit: 'g' },
  { key: 'lipidCount', label: 'Lipides', icon: lipidIcon, unit: 'g' },
];

const UserMainInfo = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data for userId:', userId);
    const userData = USER_MAIN_DATA.find(user => user.id === parseInt(userId, 10));
    console.log('Fetched userData:', userData);
    if (userData) {
      setUserInfo(userData);
      setError(null); // Réinitialiser l'erreur s'il y a des données
    } else {
      setError('Utilisateur non trouvé.');
    }
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }
  
  if (!userInfo) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <ul className="performance-list">
        {keyDataMapping.map(item => (
          <li key={item.key}>
            <div className="icon-container">
              <img src={item.icon} alt={item.label} />
            </div>
            <div className="data-container">
              <span className="value">{userInfo.keyData[item.key]} {item.unit}</span>
              <span className="label">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMainInfo;
