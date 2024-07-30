import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import getUserMainInfo from '../utils/getUserMainInfo';
import getUserPerformance from '../utils/getUserPerformance';

const UserScoreRadial = ({ userId }) => {
  const [todayScore, setTodayScore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données principales de l'utilisateur
        const userData = getUserMainInfo(userId);
        if (userData) {
          setTodayScore(userData.todayScore || userData.score);
        } else {
          throw new Error('User data not found');
        }

        // Récupérer les données de performance de l'utilisateur
        getUserPerformance(userId);

      } catch (error) {
        setError('Failed to fetch data');
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="score-radial">
   
      {todayScore !== null && (
        <div className="score-display">
          <div className="score-chart">
 
            <ResponsiveContainer width="100%" height={260}>
              <RadialBarChart 
           innerRadius="60%" 
           outerRadius="90%" 
           startAngle={180} 
           endAngle={-270}
           
                data={[{ name: 'Score', value: Math.round(todayScore * 100) }]}
              >
                  <RadialBar 
                    minAngle={15} 
                    clockWise 
                    dataKey="value" 
                    fill="#E60000" 
                    cornerRadius={100}      
                  />
                <PolarAngleAxis type="number" domain={[0, 100]}  tick={false}/>
                <PolarRadiusAxis tick={false}/>
  
              </RadialBarChart> 
            </ResponsiveContainer>
            <div  className='score-titre'> <h3>Score</h3> </div>
            <h3 className="score-text">{Math.round(todayScore * 100)}% <br /> <span className='score-span'> de votre <br /> objectif </span></h3>
          </div>
        </div> 
    
      )}
    </div>
  );
};

export default UserScoreRadial;
