import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Comp/Header';

import './styles.css';
import { RiRecycleFill } from 'react-icons/ri';

export default function Principal() {

  return (
    <div className="home-container">
      <div className="content">
        <Header />

        <section className="agendamentos">
          <h1>Agendamentos registrados</h1>
        </section>

        <section className="acoes">
          <h1>Ações Registradas</h1>
        </section>



        <section className="educacao">
          <h1>Educação ambiental</h1>
        </section>

        <section className="denuncia">
          <h1>Denuncias registradas</h1>
        </section>

      </div>
    </div>
  )
}
