import { useState, useEffect } from 'react';
import getActivityApi from '../services/getActivityApi';

const useActivityData = (userId) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                // console.log('Fetching data for user:', userId);
                const activityData = await getActivityApi(userId);
                console.log('Activity data:', activityData);
                    
                setData(activityData);
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
}

export default useActivityData;