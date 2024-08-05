import { useMocks } from '../utils/consts';
import { USER_MAIN_DATA } from './mockData'; 
 
/**
 * Récupère les données d'un utilisateur.
 *
 * Cette fonction récupère les données d'un utilisateur en utilisant soit des données fictives pour les tests,
 * soit en faisant une requête HTTP à une API. Elle renvoie les données de l'utilisateur sous forme d'objet.
 *
 * @param {number} userId - L'identifiant unique de l'utilisateur dont les données doivent être récupérées.
 * @returns {Promise<Object>} - Une promesse qui résout un objet contenant les données de l'utilisateur. 
 * L'objet retourné a la forme suivante :
 *   - { data: Object } - Les données de l'utilisateur, où `data` est l'objet représentant l'utilisateur.
 * @throws {Error} - Lance une erreur si l'utilisateur n'est pas trouvé ou si une erreur HTTP se produit.
 */
const getUserApi = async (userId) => {

  if (useMocks) {
    // Utilisation des données mockData

    const user = USER_MAIN_DATA.find(user => user.id === userId);
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    return { data: user };
  } else {
    // Appel à l'API 
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return { data: result.data };
    } catch (error) {
      console.error('Error in getUserApi:', error);
      throw error;
    }
  }
};

export default getUserApi;
