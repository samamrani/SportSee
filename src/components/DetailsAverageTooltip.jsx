import React from 'react';
import '../styles/main.scss';

/**
 * Composant de tooltip personnalisé pour afficher la durée moyenne d'une session.
 *
 * Ce composant affiche une valeur avec l'unité "min" (minutes) lorsqu'un utilisateur survole un élément du graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.payload - Les données associées au tooltip. Chaque entrée contient une valeur à afficher.
 * @returns {JSX.Element|null} - Un élément `div` avec la valeur et l'unité "min" si `payload` contient des données, sinon `null`.
 */
const DetailsAverageTooltip = ({ payload }) => {
  if (payload.length === 0) return null;

  const { value } = payload[0];

  return (
    <div className="details-average">
      <p className="value">{`${value} min`}</p>
    </div>
  );
};

export default DetailsAverageTooltip;
