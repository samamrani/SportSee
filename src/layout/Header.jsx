import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo/logo.png';
import '../styles/main.scss';

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
              <Link to="/profil">Profil</Link> 
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
