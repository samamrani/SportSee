// components/UserPerformanceRadar.jsx
import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import usePerformanceData from '../hooks/usePerformanceData';
import '../styles/main.scss';

/**
 * Composant qui affiche la performance d'un utilisateur sous forme de radar.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {number} props.userId - L'ID de l'utilisateur pour lequel afficher les performances.
 * @returns {JSX.Element} - Le rendu du composant, qui affiche un graphique radar des performances de l'utilisateur.
 */
const UserPerformanceRadar = ({ userId }) => {
  const { data, error, loading } = usePerformanceData(userId);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if(!data){

    return <div>La structure des données est incorrecte</div>
  }
 
   

  return (
    <div className='performance'>
      <div className='performance-container'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="60%" data={data}>
           {/* crée une grille en arrière-plan */}
           <PolarGrid stroke="#ddd" strokeWidth={2} />
          {/* l'axe angulaire du graphique radar, affichant les labels des catégories */}
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: '#fff' }} />
          {/* l'axe radial du graphique radar, mais sans lignes ni ticks visibles */}
          <PolarRadiusAxis axisLine={false} tick={false} tickLine={false} />
          {/* la série de données sur le graphique radar */}
          <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" />
        </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserPerformanceRadar;
