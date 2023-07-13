import React, { Component } from 'react'
import Header from './components/Header/Header';
import './global.scss'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PessoaUsuaria from './pages/PessoaUsuaria/PessoaUsuaria';
import Profissional from './pages/Profissional/Profissional';


function App() {
  return (
   
    
    <Router>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pessoausuaria' element={<PessoaUsuaria/>}/>
          <Route path='/profissional' element={<Profissional/>}/>
        </Routes>
      <Footer/>
      
    </Router>
    
    
  );
}

export default App;
