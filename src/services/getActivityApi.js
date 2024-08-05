import { useMocks } from '../utils/consts';
import { USER_ACTIVITY } from './mockData'; 

/**
 * Récupère les données d'activité pour un utilisateur spécifique.
 * 
 * Cette fonction utilise des données fictives lorsque `REACT_APP_USE_MOCKS` est défini sur `'true'`.
 * Sinon, elle effectue une requête API pour obtenir les données réelles.
 *
 * @param {number} userId - L'identifiant de l'utilisateur pour lequel les données d'activité sont récupérées.
 * @returns {Promise<Object>} - Une promesse qui résout un objet contenant les données d'activité de l'utilisateur. 
 * @throws {Error} - Lance une erreur si les données d'activité ne sont pas trouvées ou si une erreur HTTP se produit lors de la récupération des données via l'API.
 */
const getActivityApi = async (userId) => {
  if (useMocks) {
    const activity = USER_ACTIVITY.find(activity => activity.userId === userId);
    if (!activity) {
      throw new Error('Données d\'activité non trouvées');
    }
    return activity.sessions;
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.data.sessions;
    } catch (error) {
      if (error.response) {
        console.error('Error response:', await error.response.text());
      }
      console.error('Error in getUserActivity:', error);
      throw error;
    }
  }
};

export default getActivityApi;