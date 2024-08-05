import { useState, useEffect } from 'react';
import getActivityApi from '../services/getActivityApi';

/**
 * Hook personnalisé pour récupérer les données d'activité d'un utilisateur.
 *
 * Ce hook gère l'état de chargement, les erreurs éventuelles, et les données d'activité récupérées via une API.
 *
 * @param {number} userId - Identifiant unique de l'utilisateur pour lequel les données sont récupérées.
 * @returns {Object} - Un objet contenant les états suivants :
 * @returns {Array} data - Les données d'activité de l'utilisateur, si la récupération a réussi, sinon un tableau vide.
 * @returns {boolean} loading - Indique si les données sont en cours de chargement.
 * @returns {string|null} error - Message d'erreur s'il y en a eu une lors de la récupération des données, sinon `null`.
 */

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
                   
                // Transformation des données pour ajouter un champ 'num' pour l'axe X
                const transformed = activityData.map((item, index) => ({
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
}

export default useActivityData;