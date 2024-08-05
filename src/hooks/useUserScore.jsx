import { useState, useEffect } from 'react';
import getUserApi from '../services/getUserApi';

/**
 * Hook personnalisé pour récupérer le score d'un utilisateur.
 *
 * Ce hook gère l'état de chargement, les erreurs éventuelles, et le score utilisateur récupéré via une API.
 *
 * @param {number} userId - Identifiant unique de l'utilisateur pour lequel le score est récupéré.
 * @returns {Object} - Un objet contenant les états suivants :
 * @returns {number|null} todayScore - Le score de l'utilisateur pour aujourd'hui, si la récupération a réussi, sinon `null`.
 * @returns {boolean} loading - Indique si les données sont en cours de chargement.
 * @returns {string|null} error - Message d'erreur s'il y en a eu une lors de la récupération des données, sinon `null`.
 */
const useUserScore = (userId) => {
  const [todayScore, setTodayScore] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Récupérer les données principales de l'utilisateur
        const userData = await getUserApi(userId);

        console.log('user',userData)

        if (userData) {
          setTodayScore(userData.data.todayScore || userData.data.score);
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
