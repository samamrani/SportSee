import React, { useState, useEffect } from 'react';
import getUserApi from '../services/getUserApi';
import UserMainInfo from '../components/UserMainInfo'; 
import UserActivity from '../components/UserActivity'; 
import AverageSession from '../components/UserAverageSession';
import UserPerformanceRadar from '../components/UserPerformanceRadar';
import UserScoreRadial from '../components/UserScoreRadial';
import '../styles/main.scss';
import { useParams } from 'react-router-dom';

/**
 * Composant principal pour afficher les informations de l'utilisateur.
 *
 * Ce composant récupère les données de l'utilisateur via `getUserApi` et affiche
 * les informations de l'utilisateur, y compris les activités, les sessions, la performance
 * et le score, ainsi que des informations principales telles que les calories, les protéines, 
 * les glucides et les lipides.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number|null} [props.userId=null] - L'identifiant de l'utilisateur pour lequel les données sont récupérées.
 * Si `null`, l'identifiant sera extrait des paramètres de l'URL.
 * @returns {JSX.Element} - Un élément JSX contenant les informations et les graphiques pour l'utilisateur.
 */
function Home({ userId: propUserId = null }) {
  const [firstName, setFirstName] = useState('');
  const { id } = useParams();
  const userId = propUserId !== null ? propUserId : parseInt(id, 10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Récupère les données de l'utilisateur et met à jour l'état du composant.
     *
     * Cette fonction appelle `getUserApi` pour obtenir les données de l'utilisateur
     * et met à jour les états `firstName`, `loading`, et `error` en conséquence.
     *
     * @async
     * @function fetchUserData
     */
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const data = await getUserApi(userId);
        if (data && data.userInfos) {
          setFirstName(data.userInfos.firstName);
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

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <section>
        <div className='home-container'>
          <h1 className='text-home'> Bonjour <span className="red-text">{firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👋</p>
          <div className='home-content'>
            <div className='home-activity-content'>
              <div className='home-activity'>
                <UserActivity userId={userId} />
              </div>
              <div className='home-content'>
                <div><AverageSession userId={userId} /></div>
                <div><UserPerformanceRadar userId={userId} /></div>  
                <div><UserScoreRadial userId={userId} /></div>
              </div>   
            </div>
            <div className='home-main'>
              <UserMainInfo userId={userId} /> 
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
