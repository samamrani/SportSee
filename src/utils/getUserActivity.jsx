import { USER_ACTIVITY } from '../services/apiService';

/**
 * Récupère les activités d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont les activités doivent être récupérées.
 * @returns {Array|undefined} - Retourne le tableau des sessions d'activité si trouvé, sinon `undefined`.
 */
const getUserActivity = (id) => {
  const userActivity = USER_ACTIVITY.find(activity => activity.userId === id);
  return userActivity ? userActivity.sessions : [];
}

export default getUserActivity;
