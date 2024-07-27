import { USER_AVERAGE_SESSIONS } from '../services/apiService';

/**
 * Récupère les sessions moyennes d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont les sessions moyennes doivent être récupérées.
 * @returns {Object|undefined} - Retourne l'objet contenant les sessions moyennes de l'utilisateur si trouvé, sinon `undefined`.
 */
const getAverageSessions = (id) => {
  return USER_AVERAGE_SESSIONS.find(session => session.userId === id);
}

export default getAverageSessions;
