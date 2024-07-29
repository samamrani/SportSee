// ../utils/getAverageSession.js
import { USER_AVERAGE_SESSIONS } from '../services/apiService';

/**
 * Récupère les sessions moyennes d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont les sessions moyennes doivent être récupérées.
 * @returns {Object} - Retourne un objet contenant les sessions moyennes de l'utilisateur.
 */
const getAverageSessions = (id) => {
  const session = USER_AVERAGE_SESSIONS.find(session => session.userId === id);
  if (session) {
    return { sessions: session.sessions }; 
  }
  return { sessions: [] }; 
};

export default getAverageSessions;
