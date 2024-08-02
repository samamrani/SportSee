import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import getAverageSessionsApi from '../services/getAverageSessionsApi'; 
import DetailsAverageTooltip from './DetailsAverageTooltip'; 
import DetailsAverageTick from './DetailsAverageTick'; 
import '../styles/main.scss';

/**
 * Composant pour afficher la durée moyenne des sessions de l'utilisateur sous forme de graphique linéaire.
 *
 * Ce composant récupère les données de session pour un utilisateur spécifique et les affiche en utilisant
 * un graphique linéaire. La ligne représente la durée des sessions, avec des détails supplémentaires affichés
 * dans un tooltip personnalisé lors du survol du lors du clic.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel les données de session sont récupérées.
 * @returns {JSX.Element} - Un élément JSX contenant le graphique linéaire et le titre associé.
 */

const AverageSessions = ({ userId }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionData = await getAverageSessionsApi(userId);
        console.log('Fetched sessionData:', sessionData); 

        const transformedData = sessionData.map((item, index) => ({
          ...item,
          num: index + 1
      }));

      setData(transformedData);
  } catch (error) {
      setError('Échec de la récupération des données d\'activité');
      console.error('Detailed error:', error);
  }
};
    fetchData();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (data.length === 0) {
    return <div>Aucune donnée disponible</div>;
}
 
return ( 
 
  <div className='average'>  
  <h1 className='titre-session'>Durée moyenne des <br /> sessions</h1>
  <div className='average-container'>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="day" tick={<DetailsAverageTick />} axisLine={false} tickLine={false} interval={0}/>
        <Tooltip content={<DetailsAverageTooltip />} />
        <Line 
          type="monotone" 
          dataKey="sessionLength" 
          stroke="#FFF" // Couleur blanche pour la courbe
          strokeWidth={2}  // Épaisseur de la ligne
          dot={false}      // Masquer les points sur la courbe
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

);
};

export default AverageSessions;
