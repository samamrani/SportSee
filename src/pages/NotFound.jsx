import React from 'react';
import '../styles/main.scss';

/**
 * Composant affichant un message d'erreur pour les pages non trouvées.
 *
 * Ce composant est utilisé pour informer l'utilisateur que la page demandée n'existe pas ou n'a pas pu être trouvée.
 * Il rend un message simple indiquant que la page est introuvable.
 *
 * @returns {JSX.Element} Un élément JSX contenant le message "Page Not Found".
 */
function NotFound() {
  return <div>Page Not Found</div>;
}

export default NotFound;
