import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../styles/main.scss';

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
