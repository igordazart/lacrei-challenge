import React from 'react';
import './Profissional.scss'
import imagem from './profissional 1.svg'

const Profissional = () => {
  return (
    <div className='container'>
        <section className='profissional'>
            <div className='left'>
                <h1>Profissional</h1>
                <h3>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</h3>
                
            </div>

            <div className='right'>
            <img src={imagem}/>
            </div>
        </section>
    </div>
  );
}

export default Profissional;
