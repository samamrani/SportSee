import { useState, useEffect } from 'react';
import getUserApi from '../services/getUserApi';

/**
 * Hook personnalisé pour récupérer les données d'un utilisateur.
 *
 * Ce hook gère l'état de récupération des données utilisateur, y compris
 * le chargement, les erreurs, et les données une fois récupérées.
 *
 * @param {number} userId  L'identifiant de l'utilisateur pour lequel les données sont récupérées.
 * @returns {Object} Un objet contenant les états suivants :
 * @returns {Object|null} data - Les données de l'utilisateur si la récupération a réussi, sinon `null`.
 * @returns {boolean} loading - Indique si les données sont en cours de chargement.
 * @returns {string|null} error - Message d'erreur s'il y en a eu une lors de la récupération des données, sinon `null`.
 */
const useUserData = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userData = await getUserApi(userId);
        if (userData && userData.userInfos) {
          setData(userData);
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Erreur lors de la récupération des données.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return { data, loading, error };
};

export default useUserData;
