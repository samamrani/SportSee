import React from 'react';
import { USER_MAIN_DATA } from '../services/apiService'; 
import '../styles/main.scss';

/**
 * Récupère les informations d'un utilisateur en fonction de l'ID fourni.
 * 
 * @param {number} id - L'ID de l'utilisateur dont les informations doivent être récupérées.
 * @returns {Object|undefined} - Retourne l'objet de données de l'utilisateur si trouvé, sinon `undefined`.
 */
const getUserInfo = (id) => {
  return USER_MAIN_DATA.find(user => user.id === id);
}

const userId = 12; 
const userData = getUserInfo(userId);

/**
 * Composant Home qui affiche un message de bienvenue personnalisé.
 * 
 * @returns {JSX.Element} Le composant Home rendu.
 */
function Home() {
  if (!userData) {
    return <div>Utilisateur non trouvé</div>;
  }

  return (
    <main>
      <section className='home'>
        <h1> Bonjour <span className="red-text">{userData.userInfos.firstName}</span></h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👋</p>
      </section>
    </main>
  );
}

export default Home;
