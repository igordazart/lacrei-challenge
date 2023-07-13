import React from 'react';
import imagem from './rafiki 1.svg'
import './PessoaUsuaria.scss'

const PessoaUsuaria = () => {
  return (
    <div className='container'>
    <section className='pessoa_usuaria'>
        <div className='left'>
            <h1>Pessoa Usuária</h1>
            <h3>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</h3>
            
        </div>

        <div className='right'>
          <img src={imagem}/>
        </div>
    </section>
    </div>
  );
}

export default PessoaUsuaria;
