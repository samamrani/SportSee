import { USER_PERFORMANCE } from '../services/apiService';

/**
 * Récupère la performance d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont la performance doit être récupérée.
 * @returns {Object|undefined} - Retourne l'objet contenant les données de performance de l'utilisateur si trouvé, sinon `undefined`.
 */
const getUserPerformance = (id) => {
  return USER_PERFORMANCE.find(performance => performance.userId === id);
}

export default getUserPerformance;
