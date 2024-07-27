import { USER_ACTIVITY } from '../services/apiService';

/**
 * Récupère les activités d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont les activités doivent être récupérées.
 * @returns {Object|undefined} - Retourne l'objet contenant les activités de l'utilisateur si trouvé, sinon `undefined`.
 */
const getUserActivity = (id) => {
  return USER_ACTIVITY.find(activity => activity.userId === id);
}

export default getUserActivity;
