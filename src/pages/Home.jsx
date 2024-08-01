import React from 'react';
import useUserData from '../hooks/useUserData';
import UserMainInfo from '../components/UserMainInfo'; 
import UserActivity from '../components/UserActivity'; 
import AverageSession from '../components/UserAverageSession';
import UserPerformanceRadar from '../components/UserPerformanceRadar';
import UserScoreRadial from '../components/UserScoreRadial';
import '../styles/main.scss';
import { useParams } from 'react-router-dom';

/**
 * Composant principal de la page d'accueil affichant les informations et les statistiques de l'utilisateur.
 * 
 @param {Object} props - Les propriétés du composant.
 * @param {number|null} [props.userId=null] - L'identifiant de l'utilisateur. Si non fourni, il est récupéré depuis les paramètres d'URL.
 * @returns {JSX.Element} Un élément JSX représentant la page d'accueil avec les informations de l'utilisateur et les graphiques.
 */

function Home({ userId: propUserId = null }) {
  const { id } = useParams();
  const userId = propUserId !== null ? propUserId : parseInt(id, 10);
  const { data, loading, error } = useUserData(userId);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <section>
        <div className='home-container'>
          <h1 className='text-home'> Bonjour <span className="red-text">{data.userInfos.firstName}</span></h1>
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
