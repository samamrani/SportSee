import React from 'react';
import '../styles/main.scss';

/**
 * Composant de tooltip personnalisé pour afficher des informations sur une activité.
 *
 * Ce composant affiche des informations contextuelles dans un tooltip lorsque la souris est sur un élément du graphique.
 * Il gère les unités pour différents types de données (poids, calories, etc.).
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.payload - Les données associées au tooltip, chaque entrée contient la valeur et la clé de données.
 * @param {boolean} props.active - Indique si le tooltip est actif (affiché).
 * @returns {JSX.Element|null} - Un élément `div` avec les informations du tooltip si `active` est vrai et `payload` contient des données, sinon `null`.
 */
const DetailsActivityTooltip = ({ payload, active }) => {
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
              {`${entry.value} ${unit}`} {/* Affiche la valeur et l'unité */}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
};

export default DetailsActivityTooltip;
