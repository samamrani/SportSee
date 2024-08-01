import React from 'react';
import useUserData from '../hooks/useUserData';
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

/**
 * Composant pour afficher les informations principales de l'utilisateur.
 *
 * Ce composant récupère et affiche les informations principales de l'utilisateur
 * telles que les calories, protéines, glucides et lipides, avec des icônes correspondantes.
 *
 * Le composant utilise le hook personnalisé `useUserData` pour gérer la récupération
 * des données de l'utilisateur et l'état de chargement et d'erreur.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel les données sont récupérées.
 * @returns {JSX.Element} - Un élément JSX contenant les informations principales de l'utilisateur.
 */
const UserMainInfo = ({ userId }) => {
  const { data: userInfo, loading, error } = useUserData(userId);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo || !userInfo.keyData) {
    return <div>Aucune donnée disponible.</div>;
  }

  return (
    <div className="user-main-info">
      <ul className="performance-list">
        {keyDataMapping.map(item => (
          <li key={item.key} className="performance-item">
            <div className="icon-container">
              <img src={item.icon} alt={item.label} className="icon" />
            </div>
            <div className="data-container">
              <span className="value">
                {userInfo.keyData[item.key] !== undefined ? userInfo.keyData[item.key] : 'N/A'} {item.unit}
              </span>
              <span className="label">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMainInfo;
