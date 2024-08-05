import { useMocks } from '../utils/consts';
import { USER_PERFORMANCE } from './mockData'; 

/**
 * Récupère les données de performance pour un utilisateur spécifique.
 * 
 * Cette fonction utilise des données fictives lorsque `REACT_APP_USE_MOCKS` est défini sur `'true'`.
 * Sinon, elle effectue une requête API pour obtenir les données réelles.
 *
 * @param {number} userId - L'identifiant de l'utilisateur pour lequel les données de performance sont récupérées.
 * @returns {Promise<Object>} - Une promesse qui résout un objet contenant les données de performance de l'utilisateur. 
 * 
 * @throws {Error} - Lance une erreur si les données de performance ne sont pas trouvées ou si une erreur HTTP se produit lors de la récupération des données via l'API.
 */
const getPerformanceApi = async (userId) => {
  if (useMocks) {
    const performance = USER_PERFORMANCE.find(performance => performance.userId === userId);
    if (!performance) {
      throw new Error('Données de performance non trouvées');
    }
    return performance ;
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error('Error in getUserPerformance:', error);
      throw error;
    }
  }
};

export default getPerformanceApi;
