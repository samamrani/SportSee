/**
 * Récupère les données de performance de l'utilisateur depuis l'API.
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Promise<Object>} - Données de performance.
 * @throws {Error} - Si la requête échoue.
 */
async function getPerformanceApi(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Données récupérées de l\'API:', data); // Ajoutez ce log
    return data; // Retourne l'objet complet des performances, accédé via data.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données de performance:', error);
    throw error;
  }
}

export default getPerformanceApi;
