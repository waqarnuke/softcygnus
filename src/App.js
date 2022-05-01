import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
       <Route index element={<Home />} />
       <Route path="About" element={<About />} />
       <Route path="Service" element={<Service />} />
       <Route path="Contact"  element={<Contact />} />
       <Route path="*"/>
       
      </Route>
    </Routes>
       
    </>
  );
}

export default App;
