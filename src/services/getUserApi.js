/**
 * Récupère les données d'un utilisateur depuis une API.
 *
 * Cette fonction effectue une requête HTTP GET pour obtenir les données d'un utilisateur
 * en utilisant l'identifiant de l'utilisateur (`userId`). Elle retourne les données
 * de l'utilisateur au format JSON.
 *
 * @async
 * @function getUserApi
 * @param {number} userId - L'identifiant de l'utilisateur pour lequel les données doivent être récupérées.
 * @returns {Promise<Object>} Une promesse qui résout un objet contenant les données de l'utilisateur.
 * @throws {Error} Lance une erreur si la requête échoue ou si la réponse n'est pas OK.
 */
const getUserApi = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data; 
  } catch (error) {
    console.error('Error in getUserApi:', error);
    throw error;
  }
};

export default getUserApi;
