import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useUserScore from '../hooks/useUserScore';
import '../styles/main.scss';

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel afficher le score.
 *
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
const UserScoreRadial = ({ userId }) => {
  const { todayScore, error, loading } = useUserScore(userId);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="score">
      {todayScore !== null && (
        <div className="score-display">
          <div className="score-container">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="60%"
                outerRadius="90%"
                startAngle={180}
                endAngle={-200}
                data={[{ name: 'Score', value: Math.round(todayScore * 100) }]}
              >
                <RadialBar
                  minAngle={15}
                  clockWise
                  dataKey="value"
                  fill="#E60000"
                  cornerRadius={100}
                />
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <PolarRadiusAxis tick={false} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className='score-titre'>
              <h3>Score</h3>
            </div>
            <h3 className="score-text">
              {Math.round(todayScore * 100)}% <br />
              <span className='score-span'> de votre <br /> objectif </span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserScoreRadial;
