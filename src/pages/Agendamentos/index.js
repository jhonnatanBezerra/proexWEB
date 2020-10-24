import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Agendamentos() {
  return (
    <div className="container">

      <header className="logo">
        <button><img src={logoImg} alt="" /></button>
      </header>

      <header className="header">
        <div>

        </div>

        <h1>USER INFO</h1>

      </header>

      <aside className="aside">

      </aside>

      <main className="main">
        <h1>principal</h1>
      </main>

      <footer className="footer">
        <h1>footer</h1>
      </footer>
    </div>
  )
}
