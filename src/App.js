import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import './index.css';
import React from 'react';
import Modal from './components/Modal/Modal';

function App  () {
  return (
    
  

   <BrowserRouter>
   <div>
    
    <Header />
  
   </div>
   
 
   <div className="container">
   
      <Routes>
        <Route path= "/" element ={<Home/>} />
        <Route path= "/about" exact element ={<About/>} />
        <Route path= "/contact" exact element ={<ContactMe/>} />
      </Routes>
    </div>
    
   </BrowserRouter>

   
  );
}

export default App;
