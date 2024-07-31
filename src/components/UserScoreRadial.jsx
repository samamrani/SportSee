import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import getUserMainInfo from '../utils/getUserMainInfo';
import getUserPerformance from '../utils/getUserPerformance';

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel afficher le score.
 *
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */


const UserScoreRadial = ({ userId }) => {
  const [todayScore, setTodayScore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données principales de l'utilisateur
        const userData = await getUserMainInfo(userId);
        if (userData) {
          setTodayScore(userData.todayScore || userData.score);
        } else {
          throw new Error('User data not found');
        }

        // Récupérer les données de performance de l'utilisateur
      await getUserPerformance(userId);

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
                innerRadius="60%" // Rayon interne du graphique radial
                outerRadius="90%" // Rayon externe du graphique radial
                startAngle={180} // Angle de départ du graphique radial
                endAngle={-270} // Angle de fin du graphique radial
                data={[{ name: 'Score', value: Math.round(todayScore * 100) }]} // Données à afficher dans le graphique
              >
                  <RadialBar 
                     minAngle={15} // Angle minimum pour les barres radiales
                     clockWise // Direction du graphique (horaire)
                     dataKey="value" // Clé des données à afficher dans la barre radiale
                     fill="#E60000" // Couleur de la barre radiale
                     cornerRadius={100} // Arrondi des coins de la barre radiale   
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
