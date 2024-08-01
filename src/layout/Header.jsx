import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo/logo.png';

import '../styles/main.scss';

/**
 * Composant d'en-tête affichant le logo et la navigation horizontale.
 * 
 * @returns {JSX.Element} Un élément JSX représentant l'en-tête de la page avec le logo et la navigation.
 */

function Header() {
  return (
    <header>
      <div className="nav_horizontal">
        <img src={logo} alt="SportSee" className="nav_horizontal__img" />
        <nav className="nav_horizontal__nav">
          <ul className="nav_horizontal__nav__list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
            <Link to="/profile"> Profile</Link>
            </li>
            <li>
              <Link to="/reglages">Réglages</Link>  
            </li>
            <li>
              <Link to="/communaute">Communauté</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

