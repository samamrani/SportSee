import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';


/**
 * 
 * @returns 
 */

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>   
          <Route path="/" element={<Home userId={12} />} />   {/* chemin racine (/). */}
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/user/:id" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
