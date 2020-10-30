import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Agendamento from './pages/Agendamento';
import Register from './pages/Register';
import Acao from './pages/Acao';
import Home from './pages/Home';
import Principal from './pages/Principal';
import Test from './pages/Test';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/agendamento" component={Agendamento} />
        <Route path="/register" component={Register} />
        <Route path="/acao" component={Acao} />
        <Route path="/home" component={Home} />
        <Route path="/principal" component={Principal} />
        <Route path="/teste" component={Test} />

      </Switch>
    </BrowserRouter>
  )
}
