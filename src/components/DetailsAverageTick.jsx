import React from 'react';
import '../styles/main.scss'; 

/**
 * Composant de tick personnalisé pour l'axe X du graphique.
 *
 * Ce composant est utilisé pour afficher des labels personnalisés (jours de la semaine) sur l'axe X d'un graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.x - La position X du tick sur l'axe.
 * @param {number} props.y - La position Y du tick sur l'axe.
 * @param {Object} props.payload - Les données associées au tick.
 * @param {number} props.payload.value - La valeur associée au tick, utilisée pour déterminer le label à afficher.
 * @returns {JSX.Element} - Un élément `text` SVG représentant le label du tick.
 */
const DetailsAverageTick = ({ x, y, payload }) => {
  const dayLabels = ["", "L", "M", "M", "J", "V", "S", "D"];

  console.log(payload.value); 
  
  return (
    <text x={x}
          y={y + 15} 
          className="details-tick"
          textAnchor="middle">
      {dayLabels[payload.value] || ""}
    </text>
  );
};

export default DetailsAverageTick;
