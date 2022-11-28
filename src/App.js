
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<UserHome />} />
      </Routes>
    </Router>
  )
};

export default App;
