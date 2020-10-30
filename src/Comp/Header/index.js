import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { RiRecycleFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

class Header extends React.Component {

  render() {

    return (

      <header className="header-principal">
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
          <Link>{this.props.user}</Link>
          <button onClick={this.props.fn}><FiLogOut /></button>
        </div>
      </header>

    );
  }
}

export default Header;