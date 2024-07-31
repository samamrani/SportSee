/**
 * Récupère les données des sessions moyennes de l'utilisateur depuis l'API.
 *
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Promise<Array<Object>>} - Promise qui résout un tableau d'objets représentant les sessions moyennes de l'utilisateur.
 * @throws {Error} - Lance une erreur si la requête échoue.
 */
async function getAverageSessionsApi(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
  if (!response.ok) {
    throw new Error('Failed to fetch average-sessions data');
  }
  const data = await response.json();
  return data.data.sessions; 
}

export default getAverageSessionsApi;
