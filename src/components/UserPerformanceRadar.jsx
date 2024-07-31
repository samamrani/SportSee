import React, { useState, useEffect } from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import getPerformanceApi from '../services/getPerformanceApi';
import '../styles/main.scss';




const UserPerformanceRadar = ({ userId }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const performanceData = await getPerformanceApi(userId);
        console.log('Performance data:', performanceData);
  
      
        // if (!performanceData || !performanceData.data || !performanceData.data.data || !performanceData.data.kind) {
        //   throw new Error('Les données de performance sont manquantes ou mal formées');
        // }
  
  
        const transformedData = performanceData.data.data.map(item => ({
          ...item,
          kind: performanceData.data.kind[item.kind] || 'Inconnu'
        }));
  
        setData(transformedData);
      } catch (error) {
        setError('Échec de la récupération des données de performance');
        console.error('Erreur de récupération:', error);
      }
    };
  
    fetchData();
  }, [userId]);
  
   

  if (error) {
    return <div>{error}</div>;
  }


  return (
    
    <div className='objectives-radar'>
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart outerRadius="60%" data={data}>
        <PolarGrid stroke="#ddd" strokeWidth={1} />
          <PolarAngleAxis dataKey="kind"  tick={{ fontSize: 12, fill: '#fff' }} />
          <PolarRadiusAxis
            axisLine={false} 
            tick={false} 
            tickLine={false}/>
          <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserPerformanceRadar;
