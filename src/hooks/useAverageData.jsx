import { useState, useEffect } from 'react';
import getAverageSessionsApi from '../services/getAverageSessionsApi';

/**
 * Hook personnalisé pour récupérer les données des sessions moyennes d'un utilisateur.
 *
 * Ce hook gère l'état de chargement, les erreurs éventuelles, et les données de sessions moyennes récupérées via une API.
 *
 * @param {Object} params - Objet contenant l'identifiant utilisateur.
 * @param {number} params.userId - Identifiant unique de l'utilisateur pour lequel les données sont récupérées.
 * @returns {Object} - Un objet contenant les états suivants :
 * @returns {Array} data - Les données des sessions moyennes de l'utilisateur, si la récupération a réussi, sinon un tableau vide.
 * @returns {boolean} loading - Indique si les données sont en cours de chargement.
 * @returns {string|null} error - Message d'erreur s'il y en a eu une lors de la récupération des données, sinon `null`.
 */

const useAverageData = ({ userId }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true) 
        try {
          const sessionData = await getAverageSessionsApi(userId);
          console.log('Fetched sessionData:', sessionData); 
  
          const transformed = data.map((item, index) => ({
            ...item,
            num: index + 1
          }));

        setData(transformed);
    } catch (error) {
        setError('Échec de la récupération des données d\'activité');
        console.error('Detailed error:', error);
    }
  
    finally {
      setLoading(false);
    }
  
  };
      fetchData();
    }, [userId]);
  
    return { data, error, loading };
};

export default useAverageData;