import React, { useState, useEffect } from 'react';
import { USER_MAIN_DATA } from '../services/apiService'; 
import UserMainInfo from '../components/UserMainInfo'; 
import UserActivity from '../components/UserActivity'; 
import AverageSession from '../components/UserAverageSession';


import '../styles/main.scss';

function Home() {
  const userId = 18;  
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const userData = USER_MAIN_DATA.find(user => user.id === userId);
    if (userData) {
      setFirstName(userData.userInfos.firstName);
    }
  }, [userId]);

  return (
    <main>
      <section>
        <div className='home-container'>
          <h1 className='text-home'> Bonjour <span className="red-text">{firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👋</p>
          <div className='home-content'>
            <div className='home-activity-content'>
              <div className='home-activity'>
                <UserActivity userId={userId}/>
              </div>
              <div className='home-content'>
                <div><AverageSession userId={userId}/></div>
                <div></div>
                <div></div>
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
