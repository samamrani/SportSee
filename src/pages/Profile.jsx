import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { USER_MAIN_DATA } from '../services/apiService'; 
import UserMainInfo from '../components/UserMainInfo'; 
import UserActivity from '../components/UserActivity'; 
import AverageSession from '../components/UserAverageSession';
import UserPerformanceRadar from '../components/UserPerformanceRadar';
import UserScoreRadial from '../components/UserScoreRadial';
import '../styles/main.scss';

function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // console.log('Fetching data for userId:', id); 
    const fetchUserData = () => {
      const user = USER_MAIN_DATA.find(user => user.id === parseInt(id, 10));
      console.log('Fetched userData:', user);
      if (user) {
        setUserData(user);
      } else {
        console.error('Utilisateur non trouvé');
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  if (!userData) {
    return <p>Chargement...</p>;
  }

  return (
    <main>
      <section>
        <div className='home-container'>
          <h1 className='text-home'>
            Bonjour <span className="red-text">{userData.userInfos.firstName}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👋</p>
          <div className='home-content'>
            <div className='home-activity-content'>
              <div className='home-activity'>
                <UserActivity userId={id} />
              </div>
              <div className='home-content'>
                <div><AverageSession userId={id} /></div>
                <div><UserPerformanceRadar userId={id} /></div>  
                <div><UserScoreRadial userId={id} /></div>
              </div>   
            </div>
            <div className='home-main'>
              <UserMainInfo userId={id} /> 
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
