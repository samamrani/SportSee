import { useState, useEffect } from 'react';
import getPerformanceApi from '../services/getPerformanceApi';
/**
 * Hook personnalisé pour récupérer les données de performance d'un utilisateur.
 *
 * Ce hook gère l'état de chargement, les erreurs éventuelles, et les données de performance récupérées via une API.
 *
 * @param {number} userId - Identifiant unique de l'utilisateur pour lequel les données de performance sont récupérées.
 * @returns {Object} - Un objet contenant les états suivants :
 * @returns {Array} data - Les données de performance de l'utilisateur, si la récupération a réussi, sinon un tableau vide.
 * @returns {boolean} loading - Indique si les données sont en cours de chargement.
 * @returns {string|null} error - Message d'erreur s'il y en a eu une lors de la récupération des données, sinon `null`.
 */
const usePerformanceData = (userId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // l'état de chargement

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const performanceData = await getPerformanceApi(userId);
    
         console.log('Données récupérées:', performanceData);
         
         const performanceArray = performanceData.data; 
         const kindMapping = performanceData.kind; 
       
       
           const transformed = performanceArray.map(item => ({
             ...item,
             kind: kindMapping[item.kind] || 'Inconnu'
           }));

    setData(transformed)
     
      } catch (error) {
        setError('Échec de la récupération des données de performance');
        console.error('Erreur de récupération:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [userId]);

  return { data, error, loading };
};

export default usePerformanceData;
