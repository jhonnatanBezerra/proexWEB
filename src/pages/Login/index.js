import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { RiRecycleFill } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import Fundo from '../../assets/pessoas.png';

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <strong>RECICLA</strong>
        <strong> NAVIR<RiRecycleFill size={16} color="#008000" />Í</strong>
        <form >
          <h1>Faça seu Login</h1>
          <input placeholder="Usuario" />
          <input type="password" placeholder="Senha" />
          <button className="button" type="submit">Entrar</button>
          <Link to="/register" className="back-link"> <FiLogIn size={26} /> Não tenho cadastro</Link>
        </form>
      </section>

      <img src={Fundo} alt="Recicla Naviraí" />
    </div>
  )
}
