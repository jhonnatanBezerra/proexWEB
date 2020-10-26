import React, { useState, useEffect } from 'react';
import api from '../../services/ApiSwagger/api';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { RiRecycleFill } from 'react-icons/ri';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';

export default function Agendamentos() {

  const [agendamentos, setAgendamentos] = useState([]);
  const [bairros, setBairros] = useState([]);


  const [diaSemana, setDia] = useState('');
  const [bairroID, setBairroID] = useState('');
  const [horario, setHorario] = useState('');
  const [tipoColeta, setTipoColeta] = useState('');

  const history = useHistory();


  useEffect(() => {

    api.get('bairros').then(response => {
      setBairros(response.data);
    }, []);

    api.get('agendamentos').then(response => {
      setAgendamentos(response.data);
    })
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      bairro: {
        "id": bairroID
      },
      diaSemana,
      horario,
      tipoColeta,
    };

    try {
      const response = await api.post('agendamentos', data);
      alert('Novo agendamento cadastrado com sucesso');
    } catch (err) {
      alert('Aconteceu um erro');
      console.log(data);
    }

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
    <div className="agendamento-container">
      <header>

        <div className="logo">
          <strong>RECICLA</strong>
          <strong> NAVIR<RiRecycleFill size={16} color="#008000" />Í</strong>
        </div>

        <div className="nav">
          <Link>Home</Link>
          <Link>Agendamentos</Link>
          <Link to="/acao">Ações</Link>
          <Link>Configurações</Link>
        </div>

        <div className="user">
          <Link>Astoufo</Link>
          <button><FiLogOut /></button>
        </div>
      </header>

      <section>
        <h1>Novo agendamento</h1>
        <form onSubmit={handleRegister}>
          <div className="field-left">
            <p>Dia da coleta</p>
            <select name="dia" onChange={e => setDia(e.target.value)}>
              <option value="" >Dia da semana</option>
              <option value="SEGUNDA">Segunda-Feira</option>
              <option value="TERCA">Terça-Feira</option>
              <option value="QUARTA">Quarta-Feira</option>
              <option value="QUINTA">Quinta-Feira</option>
              <option value="SEXTA">Sexta-Feira</option>
              <option value="SABADO">Sabado</option>
              <option value="DOMINGO">Domingo</option>
            </select>
            <p>Horario de coleta</p>
            <input type="time" onChange={e => setHorario(e.target.value)} />

          </div>

          <div className="field-rigth">
            <p>Bairro</p>
            <select name="bairro" onChange={e => setBairroID(e.target.value)}>
              <option value="">Selecione o bairro</option>
              {bairros.map(bairro => (
                <option key={bairro.id} value={bairro.id}>{bairro.nome}</option>
              ))}
            </select>

            <p>Tipo de coleta</p>

            <select name="coleta" onChange={e => setTipoColeta(e.target.value)}>
              <option value="">Tipo de coleta</option>
              <option value="COLETACOMUM">Coleta comum</option>
              <option value="COLETASELETIVA">Coleta seletiva</option>
            </select>

          </div>
          <div className="buttons">
            <button type="submit">Agendar</button>
            <button type="submit">Cancelar</button>
          </div>

        </form>
      </section>

      <section className="agendamentos">
        <h1>Agendamentos</h1>
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
  )
}
