import { useState, useEffect } from 'react';
import getPerformanceApi from '../services/getPerformanceApi';

/**
 * Hook personnalisé pour récupérer les données de performance d'un utilisateur.
 * @param {number} userId - Identifiant unique de l'utilisateur.
 * @returns {Object} - Un objet contenant les données de performance, les erreurs et l'état de chargement.
 */
const usePerformanceData = (userId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // l'état de chargement

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const performanceData = await getPerformanceApi(userId);
    
        // console.log('Données récupérées:', performanceData);
    
        const performanceArray = performanceData.data.data; 
        const kindMapping = performanceData.data.kind; 
    
        if (Array.isArray(performanceArray)) {
          const transformedData = performanceArray.map(item => ({
            ...item,
            kind: kindMapping[item.kind] || 'Inconnu'
          }));
          setData(transformedData);
        } else {
          console.error('La structure des données est incorrecte:', performanceData);
          setError('Données de performance invalides');
        }
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
