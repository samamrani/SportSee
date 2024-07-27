import React from 'react';
import getUserInfo from '../utils/getUserInfo'; 
import '../styles/main.scss';

/**
 * ID de l'utilisateur pour lequel les données sont récupérées.
 * @constant {number}
 */
const userId = 12; 

/**
 * Données de l'utilisateur récupérées à l'aide de la fonction `getUserInfo`.
 * @type {Object|undefined}
 */
const userData = getUserInfo(userId);

/**
 * Composant fonctionnel représentant la page d'accueil de l'utilisateur.
 * 
 * @returns {JSX.Element} - Le JSX du composant `Home`. Affiche un message de bienvenue et un message de félicitations.
 */
function Home() {
  if (!userData) {
    return <div>Utilisateur non trouvé</div>;
  }

  return (
    <main>
      <section className='home'>
        <h1> Bonjour <span className="red-text">{userData.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👋</p>
      </section>
    </main>
  );
}

export default Home;
