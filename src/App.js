import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import UserMainInfo from './components/UserMainInfo'; 
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserMainInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
