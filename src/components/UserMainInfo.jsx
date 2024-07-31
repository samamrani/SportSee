import React, { useState, useEffect } from 'react';
import getUserApi from '../services/getUserApi';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Récupère les données de l'utilisateur et met à jour l'état du composant.
     *
     * Cette fonction appelle `getUserApi` pour obtenir les données de l'utilisateur
     * et met à jour les états `userInfo`, `error` et `loading` en conséquence.
     *
     * @async
     * @function fetchUserData
     */
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const data = await getUserApi(userId);
        setUserInfo(data);
        setError(null);
      } catch (err) {
        setError('Erreur lors de la récupération des données.');
        setUserInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

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
