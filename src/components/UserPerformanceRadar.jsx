import React, { useState, useEffect } from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import getUserPerformance from '../utils/getUserPerformance';
import '../styles/main.scss';




const UserPerformanceRadar = ({ userId }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const performanceData = await getUserPerformance(userId);
        console.log('Performance data:', performanceData);

        // Assurez-vous que les données sont correctement transformées
        const transformedData = performanceData.data.map(item => ({
          ...item,
          kind: performanceData.kind[item.kind]
        }));

        setData(transformedData);
      } catch (error) {
        setError('Failed to fetch performance data');
        console.error('Fetch error:', error);
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
