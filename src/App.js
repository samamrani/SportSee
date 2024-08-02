import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

/**
 * Composant principal de l'application.
 * 
 * Le composant `App` configure le routage de l'application en utilisant `react-router-dom`. 
 * Il utilise le `MainLayout` comme mise en page principale et définit les routes pour les différentes pages de l'application.
 * 
 * Routes définies :
 * - `/` : Page d'accueil (`Home`) avec un paramètre utilisateur fixe (`userId={12}`).
 * - `/profile/:id` : Page de profil (`Profile`) qui utilise un paramètre d'ID dynamique.
 * - `/user/:id` : Page d'accueil (`Home`) qui utilise un paramètre d'ID dynamique.
 * - `*` : Page 404 (`NotFound`) pour toutes les autres routes non définies.
 * 
 * @component
 * @returns {JSX.Element} Le rendu du composant `App`.
 */
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home userId={12} />} />   {/* Chemin racine (/) */}
          <Route path="/profile/:id" element={<Profile />} />  {/* Page de profil avec un ID dynamique */}
          <Route path="/user/:id" element={<Home />} />         {/* Page d'accueil avec un ID dynamique */}
          <Route path="*" element={<NotFound />} />             {/* Page 404 pour les routes non définies */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
