import React, { useState, useEffect } from 'react';
import { USER_MAIN_DATA } from '../services/apiService'; 
import calorieIcon from '../assets/icon/calories-icon.png';
import carbsIcon from '../assets/icon/carbs-icon.png';
import lipidIcon from '../assets/icon/fat-icon.png';
import proteinIcon from '../assets/icon/protein-icon.png';
import '../styles/main.scss';

/**
 * Mappage des clés de données avec leurs labels et icônes.
 * @type {Array<Object>}
 */
const keyDataMapping = [
  { key: 'calorieCount', label: 'Calories', icon: calorieIcon, unit: 'kCal' },
  { key: 'proteinCount', label: 'Protéines', icon: proteinIcon, unit: 'g' },
  { key: 'carbohydrateCount', label: 'Glucides', icon: carbsIcon, unit: 'g' },
  { key: 'lipidCount', label: 'Lipides', icon: lipidIcon, unit: 'g' },
];

/**
 * Composant pour afficher les informations principales de l'utilisateur.
 *
 * Ce composant récupère et affiche les informations principales de l'utilisateur
 * telles que les calories, protéines, glucides et lipides, avec des icônes correspondantes.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel les données sont récupérées.
 * @returns {JSX.Element} - Un élément JSX contenant les informations principales de l'utilisateur.
 */
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
