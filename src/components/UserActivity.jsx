import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DetailsActivityTooltip from './DetailsActivityTooltip';
import icon from '../assets/images/Oval.png';
import iconCopy from '../assets/images/Oval Copy.png';
import '../styles/main.scss';
import useActivityData from '../hooks/useActivityData';

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
  const {data, loading, error} = useActivityData(userId)
    
            if(loading){
                return <div>Chargement en cours...</div>
            }

    if (error) {
        return <div>{error}</div>;
    }

    if (data.length === 0) {
        return <div>Aucune donnée disponible</div>;
    }
    const transformed = data.map((item, index) => ({
        ...item,
        num: index + 1
    }));

    return (
        <div className='activity'>
            <div className='activity-container'> 
                <h1>Activité quotidienne</h1>
                <div className='activity-icon'>
                    <span><img src={icon} alt="icon" className='logo'/> Poids (kg) </span>  
                    <span><img src={iconCopy} alt="icon" className='logo'/> Calories brûlées (kCal) </span>  
                </div>
            </div>

            <div>
        {/* la taille du graphique en fonction de l'espace disponible */}
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={transformed} barGap={8} barCategoryGap={1}>
            {/* Grille de fond pour le graphique */}
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            {/* Axe des X avec le numéro d'index */}
            <XAxis dataKey="num" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
            {/* Axe des Y pour le poids avec une configuration spécifique */}
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
            {/* Axe des Y-masqué */}
            <YAxis
              yAxisId="calories"
              dataKey="calories"
              type="number"
              domain={['dataMin - 20', 'dataMax + 10']}
              hide={true}
            />
            {/* Tooltip personnalisé pour afficher les détails lors du survol */}
            <Tooltip content={<DetailsActivityTooltip />} />
            {/* Barres pour le poids avec une couleur spécifique et un rayon de bordure */}
            <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
            {/* Barres pour les calories avec une couleur différente et un rayon de bordure */}
            <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserActivity;
