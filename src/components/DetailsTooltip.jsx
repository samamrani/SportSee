import React from 'react';
import '../styles/main.scss';

const DetailsTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="details-tooltip">
       
        {payload.map((entry, index) => {
          let unit = ''; // Variable pour stocker l'unité

          // Détermine l'unité basée sur la clé dataKey
          switch (entry.dataKey) {
            case 'kilogram':
              unit = 'kg'; // Unité pour le poids
              break;
            case 'calories':
              unit = 'kCal'; // Unité pour les calories
              break;
            default:
              unit = ''; // Pas d'unité pour d'autres clés
          }

          return (
            <p key={index} className="details-details">
              {`${entry.value} ${unit}`} {/* Affiche le nom, la valeur et l'unité */}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
};

export default DetailsTooltip;
