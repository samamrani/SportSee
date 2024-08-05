

import { useState, useEffect } from 'react';
import getUserAverageSessions from '../services/getAverageSessionsApi';

const useAverageData = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getUserAverageSessions(userId); 

        const transformed = result.map((item, index) => ({
          ...item,
          num: index + 1
        }));

        setData(transformed); 
      } catch (err) {
        console.error('Detailed error:', err);
        setError('Erreur lors de la récupération des données.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, loading, error };
};

export default useAverageData;
