import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

/**
 * Composant de profil utilisateur.
 *
 * Ce composant récupère l'identifiant de l'utilisateur depuis les paramètres d'URL et passe cet identifiant au 
 * composant `Home` pour afficher les informations spécifiques à cet utilisateur.
 * 
 * @returns {JSX.Element} Un élément JSX représentant la page de profil utilisateur, affichant les informations
 *                        et les statistiques de l'utilisateur via le composant `Home`.
 */

function Profile() {
  const { id } = useParams();


  return <Home userId={id} />;
}

export default Profile;
