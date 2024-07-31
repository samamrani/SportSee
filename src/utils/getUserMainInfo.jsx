import { USER_MAIN_DATA } from '../services/apiService';

/**
 * Récupère les informations d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont les informations doivent être récupérées.
 * @returns {Object|undefined} - Retourne l'objet de données de l'utilisateur si trouvé, sinon `undefined`.
 */
const getUserMainInfo = (id) => {
  return USER_MAIN_DATA.find(user => user.id === id) || null;
}

export default getUserMainInfo;