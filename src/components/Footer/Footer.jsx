import React from 'react';
import './Footer.scss'
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='container'>
    <footer className='footer'>
      <nav>
          <ul className='navItems'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Pessoa Usuária</a></li>
              <li><a href='#'>Profissional</a></li>
          </ul>
      </nav>
      <div className='icons'>
        <TiSocialFacebookCircular size={30}/>
        <SlSocialInstagram size={30}/>
        <SlSocialLinkedin size={30}/>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </footer>
    </div>
  );
}

export default Footer;
