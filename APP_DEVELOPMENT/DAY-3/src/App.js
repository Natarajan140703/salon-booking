import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}


export default App;