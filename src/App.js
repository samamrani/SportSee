import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
          <MainLayout>
            <Routes>
            <Route path="/" element={<Home />} />
            
            </Routes>
          </MainLayout>
    </Router>
  );
}

export default App;
