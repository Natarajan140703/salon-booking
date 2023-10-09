import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

import Contact from './Components/Contact';
import Services from './Components/Services';
import Appointment from './Components/Appointment';
import Dashboard from './Components/Dashboard';
import HomeComponent from './Components/HomeComponent';
import ViewAppointment from './Components/ViewAppointment';
import Terms from './Components/Terms';
import About from './Components/About';
import Faq from './Components/Faq';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/terms" element={<Terms/>} />
       
        <Route path='/home' element={<HomeComponent/>}/> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/viewappointment' element={<ViewAppointment/>}/> 
        
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<Faq/>} />
        

      </Routes>
    </Router>
  );
}

export default App;
