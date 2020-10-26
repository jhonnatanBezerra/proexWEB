import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import { RiRecycleFill } from 'react-icons/ri';


export default function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <header>
          <div className="logoss">
            <strong>RECICLA</strong>
            <strong> NAVIR<RiRecycleFill size={16} color="#008000" />Í</strong>
          </div>
          <nav>
            <Link>Agendamentos</Link>
            <Link>Agendamentos</Link>
            <Link>Agendamentos</Link>
            <Link>Agendamentos</Link>
            <Link>Agendamentos</Link>
          </nav>
          <div className="user-status">
            <strong>Nome usuario</strong>
            <strong>Sair</strong>
          </div>
        </header>

        <section>
          <form action="">
            <h1>formulario</h1>
          </form>
        </section>

        <section>

        </section>

      </div>
    </div>
  )

}
