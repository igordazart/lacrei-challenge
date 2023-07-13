import React from 'react';
import './Home.scss'
import imagem from './rafiki 2.png'
import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
    <section className='home'>
      
        <div className='left'>
            <h1>Boas vindas a Lacrei Saúde</h1>
            <h3>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h3>
            <div className='buttons'>
              <button className='btn_usuaria'><NavLink to='/pessoausuaria'>Pessoa Usuária</NavLink></button>
              <button className='btn_profissional'><NavLink to='/profissional'>Profissional</NavLink></button>
            </div>
        </div>

        <div className='right'>
          <img src={imagem}/>
        </div>
    </section>
    </div>
  );
}

export default Home;
