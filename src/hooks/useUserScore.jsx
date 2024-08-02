import { useState, useEffect } from 'react';
import getUserApi from '../services/getUserApi';

/**
 * Hook personnalisé pour récupérer le score utilisateur.
 *
 * @param {number} userId - L'identifiant de l'utilisateur pour lequel récupérer les données.
 * @returns {Object} - Un objet contenant les états de score, d'erreur et de chargement.
 */
const useUserScore = (userId) => {
  const [todayScore, setTodayScore] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Récupérer les données principales de l'utilisateur
        const userData = await getUserApi(userId);
        if (userData) {
          setTodayScore(userData.todayScore || userData.score);
        } else {
          throw new Error('User data not found');
        }
        
      } catch (error) {
        setError('Échec de la récupération des données');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { todayScore, error, loading };
};

export default useUserScore;
