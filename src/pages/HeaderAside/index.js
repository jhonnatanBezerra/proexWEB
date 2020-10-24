import React from 'react';
import { Link } from 'react-router-dom';
import './styless.css'
import Logo from '../../assets/logo.png';
import { FiLogOut } from 'react-icons/fi';

export default function Agendamentos() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Link to="/home">
            <img src={Logo} alt="Recicla Naviraí" />
          </Link>
        </div>
        <div className="user-info">
          <Link to="user">
            <span>Nome Usuario</span>
          </Link>
          <Link to="/">
            <FiLogOut />
          </Link>
        </div>
      </header>

      <main className="content">
        <aside className="aside">
          <h1>MENU</h1>

          <Link to="home">
            <span>Home</span>
          </Link>

          <Link to="agendamento">
            <span>Agendamentos</span>
          </Link>

          <Link to="config">
            <span>Configurações</span>
          </Link>

        </aside>
      </main>

    </div>
  )
}
