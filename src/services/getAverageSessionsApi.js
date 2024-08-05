import { useMocks } from '../utils/consts';
import { USER_AVERAGE_SESSIONS } from './mockData'; 

/**
 * Récupère les données des sessions moyennes pour un utilisateur spécifique.
 * 
 * Cette fonction utilise des données fictives lorsque `REACT_APP_USE_MOCKS` est défini sur `'true'`.
 * Sinon, elle effectue une requête API pour obtenir les données réelles.
 *
 * @param {number} userId - L'identifiant de l'utilisateur pour lequel les données de session sont récupérées.
 * @returns {Promise<Array<{ day: number, sessionLength: number }>>} - Une promesse qui résout un tableau d'objets représentant les données de sessions moyennes de l'utilisateur.
 * 
 * @throws {Error} - Lance une erreur si les données de session moyennes ne sont pas trouvées ou si une erreur HTTP se produit lors de la récupération des données via l'API.
 */
const getUserAverageSessions = async (userId) => {
  if (useMocks) {
    const sessions = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
    if (!sessions) {
      throw new Error('Données de sessions moyennes non trouvées');
    }
    return sessions.sessions;
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.data.sessions;
    } catch (error) {
      console.error('Error in getUserAverageSessions:', error);
      throw error;
    }
  }
};

export default getUserAverageSessions;
