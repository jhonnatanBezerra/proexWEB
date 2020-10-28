import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { RiRecycleFill } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi';
import { GiRecycle } from 'react-icons/gi';
import { HiUsers, HiSpeakerphone } from 'react-icons/hi';


export default function Principal() {
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


        <section className="atalhos">

          <ul>
            <li>
              <Link to="/agendamento">
                <span><BiCalendar /></span>
                <strong>Agendamentos</strong>
              </Link>
            </li>

            <li className="vermelho">
              <Link><span><GiRecycle /></span>
                <strong>Educação Ambiental</strong>
              </Link>
            </li>

            <li className="verde">
              <Link><span><HiUsers /></span>
                <strong>Ações</strong>
              </Link>
            </li>

            <li className="amarelo">
              <Link>
                <span><HiSpeakerphone /></span>
                <strong>Denuncias</strong>
              </Link>
            </li>

          </ul>
        </section>

      </div>
    </div>
  )
}
