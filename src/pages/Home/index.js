import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import { RiRecycleFill } from 'react-icons/ri';


export default function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <header>
          <div className="logo">
            <Link to="/home">
              <strong>RECICLA</strong>
              <strong> NAVIR<RiRecycleFill />Í</strong>
            </Link>
          </div>
          <nav className="nav-bar">
            <Link>Agendamentos</Link>
            <Link>Ações</Link>
            <Link>Denuncias</Link>
            <Link>Educação Ambiental</Link>
            <Link>Gestores</Link>
          </nav>
          <div className="user-status">
            <strong>NomeUsuario</strong>
            <strong>Sair</strong>
          </div>
        </header>

        <section>
          <form action="">
            <h1>formulario</h1>
          </form>
        </section>

        <section>
          <h1>Agendamentos</h1>
        </section>

      </div>
    </div>
  )

}
