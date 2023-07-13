import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Lacrei</h1>
          <nav>
              <ul className='navItems'>
                  <NavLink exact to='/'>Home</NavLink>
                  <NavLink to='/pessoausuaria'>Pessoa Usuária</NavLink>
                  <NavLink to='/profissional'>Profissional</NavLink>
              </ul>
          </nav>
    </header>
  );
}

export default Header;
