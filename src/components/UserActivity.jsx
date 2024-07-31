import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import getActivityApi from '../services/getActivityApi';
import DetailsActivityTooltip from './DetailsActivityTooltip';
import icon from '../assets/images/Oval.png';
import iconCopy from '../assets/images/Oval Copy.png';
import '../styles/main.scss';

/**
 * Composant qui affiche l'activité quotidienne d'un utilisateur sous forme de graphique à barres.
 *
 * Ce composant utilise les données récupérées via une API pour afficher un graphique avec deux types de données :
 * le poids (en kg) et les calories brûlées (en kCal). Les données sont affichées sur un graphique à barres
 * avec deux axes y pour représenter ces deux types de données.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur dont les données d'activité doivent être récupérées.
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const UserActivity = ({ userId }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        /**
         * Fonction asynchrone pour récupérer les données d'activité de l'utilisateur.
         * Les données sont transformées pour ajouter un champ num utilisé pour l'affichage
         * sur l'axe des X du graphique.
         */
        const fetchData = async () => {
            try {
                console.log('Fetching data for user:', userId);
                const activityData = await getActivityApi(userId);
                console.log('Activity data:', activityData);
                
                const transformedData = activityData.map((item, index) => ({
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
        <div className='activity'>
            <div className='activity-container'>
                <div className='activitu-titl'>
                    <h1>Activité quotidienne</h1>
                </div>
                <div className='activity-icon'>
                    <span><img src={icon} alt="icon" className='logo'/> Poids (kg) </span>  
                    <span><img src={iconCopy} alt="icon" className='logo'/> Calories brûlées (kCal) </span>  
                </div>
            </div>

            <div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data} barGap={8} barCategoryGap={1}>
                        <CartesianGrid vertical={false} strokeDasharray="1 1" />
                        <XAxis dataKey="num" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
                        <YAxis
                            yAxisId="kilogram"
                            dataKey="kilogram"
                            type="number"
                            domain={['dataMin - 2', 'dataMax + 1']}
                            tickCount={4}
                            axisLine={false}
                            orientation="right"
                            tickLine={false}
                            tick={{ fontSize: 14 }}
                            dx={15}
                        />
                        <YAxis
                            yAxisId="calories"
                            dataKey="calories"
                            type="number"
                            domain={['dataMin - 20', 'dataMax + 10']}
                            hide={true}
                        />
                        <Tooltip content={<DetailsActivityTooltip />} />
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default UserActivity;
