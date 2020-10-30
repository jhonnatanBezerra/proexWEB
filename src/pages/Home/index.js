import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/ApiSwagger/api';
import Header from '../../Comp/Header';

import './styles.css';


import { FiTrash2 } from 'react-icons/fi';


export default function Home() {
  const usuario = localStorage.getItem('usuario');

  const [agendamentos, setAgendamentos] = useState([]);
  const [bairros, setBairros] = useState([]);

  const [diaSemana, setDia] = useState([]);
  const [bairroID, setBairroID] = useState([]);
  const [horario, setHorario] = useState([]);
  const [tipoColeta, setTipoColeta] = useState([]);

  const history = useHistory();


  useEffect(() => {

    api.get('bairros').then(response => {
      setBairros(response.data);
    }, []);

    api.get('agendamentos').then(response => {
      setAgendamentos(response.data);
    })
  }, []);

  async function handleLogOut() {
    localStorage.clear();
    history.push('/');
  }


  async function handlerDelete(id) {
    try {
      await api.delete(`agendamentos/${id}`);
      alert('Agendamento deletado com sucesso');

      setAgendamentos(agendamentos.filter(agendamento => agendamento.id != id)); // removendo em tempo real o que foi excluido
    } catch (err) {
      alert('Erro ao deletar, tente novamente mais tarde');
    }
  }

  return (
    <div className="home-container">
      <div className="content">
        <Header user={usuario} fn={handleLogOut} />

        <section className="register">
          <div className="header">
            <h1>Novo Agendamento</h1>
          </div>

          <form >
            <div className="inputs">

              <select name="dia" onChange={e => setDia(e.target.value)} >
                <option value="" >Dia de semana</option>
                <option value="SEGUNDA">Segunda-Feira</option>
                <option value="TERCA">Terça-Feira</option>
                <option value="QUARTA">Quarta-Feira</option>
                <option value="QUINTA">Quinta-Feira</option>
                <option value="SEXTA">Sexta-Feira</option>
                <option value="SABADO">Sabado</option>
                <option value="DOMINGO">Domingo</option>
              </select>


              <input type="time" onChange={e => setHorario(e.target.value)} />

              <select name="bairro" onChange={e => setBairroID(e.target.value)}>
                <option value="">Selecione o bairro</option>
                {bairros.map(bairro => (
                  <option key={bairro.id} value={bairro.id}>{bairro.nome}</option>
                ))}
              </select>


              <select name="coleta" onChange={e => setTipoColeta(e.target.value)}>
                <option value="">Tipo de coleta</option>
                <option value="COLETACOMUM">Coleta comum</option>
                <option value="COLETASELETIVA">Coleta seletiva</option>
              </select>

            </div>
            <div className="buttons">
              <button>Agendar</button>
              <button>Cancelar</button>
            </div>
          </form>

        </section>

        <section className="agendamentos">
          <div className="header">
            <h1>Lista de Agendamentos</h1>
          </div>

          <ul>
            {agendamentos.map(agendamento => (
              <li key={agendamento.id}>
                <strong>Dia da semana</strong>
                <p>{agendamento.diaSemana}</p>

                <strong>Horario</strong>
                <p>{agendamento.horario}</p>

                <strong>Bairro</strong>
                <p>{agendamento.bairro.nome}</p>

                <strong>Tipo de coleta</strong>
                <p>{agendamento.tipoColeta}</p>

                <button type="button" onClick={() => handlerDelete(agendamento.id)} >
                  <FiTrash2 size={16} color="#008000" />
                </button>
              </li>
            ))}
          </ul>

        </section>

      </div>

    </div>

  )

}
