/**
 * Récupère les données d'activité pour un utilisateur spécifique depuis l'API.
 *
 * Cette fonction envoie une requête HTTP GET à l'API pour obtenir les données d'activité d'un utilisateur
 * et renvoie les sessions d'activité. Si la requête échoue, elle lance une erreur.
 *
 * @async
 * @function
 * @param {number} userId - L'identifiant de l'utilisateur pour lequel récupérer les données d'activité.
 * @returns {Promise<Array<Object>>} - Une promesse qui résout un tableau d'objets représentant les sessions d'activité.
 * @throws {Error} - Lance une erreur si la requête échoue ou si la réponse n'est pas correcte.
 */
async function getActivityApi(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
console.log(response)

  if (!response.ok) {
    throw new Error('Failed to fetch activity data');
  }
  const data = await response.json();
  return data.data.sessions;  // Retourne directement le tableau de sessions d'activité
}

export default getActivityApi;
