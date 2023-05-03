import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrentDate from './components/pages/CurrentDate';
import History from './components/pages/History';
import Invite from './components/pages/Invite';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path="/currentdate" element={<CurrentDate />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
