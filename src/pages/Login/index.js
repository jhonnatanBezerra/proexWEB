import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/ApiLocal/api';


import './styles.css';
import Fundo from '../../assets/pessoas.png';

import { RiRecycleFill } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email,
      senha,
    };

    try {
      const response = await api.post('gestores/autenticar', data);
      localStorage.setItem('usuario',response.data.nome);
      history.push('/agendamento');
    } catch (err) {
      alert('Email ou senha invalido, tente novamente');
    }

  }

  return (
    <div className="login-container">
      <section className="form">
        <strong>RECICLA</strong>
        <strong> NAVIR<RiRecycleFill size={16} color="#008000" />Í</strong>
        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input placeholder="Usuario" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
          <button className="button" type="submit">Entrar</button>
          <Link to="/register" className="back-link"> <FiLogIn size={26} /> Não tenho cadastro</Link>
        </form>
      </section>

      <img src={Fundo} alt="Recicla Naviraí" />
    </div>
  )
}
