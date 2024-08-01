import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../styles/main.scss';

/**
 * Composant de disposition principale pour l'application.
 * 
  @param {Object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les éléments enfants à afficher dans la section de contenu principal.
 * @returns {JSX.Element} Un élément JSX représentant la disposition principale de la page, y compris l'en-tête, le contenu principal et le pied de page verticalement.
 */ 

function MainLayout({ children }) {
  
  return (
    <div className="main-layout">
      <Header />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
