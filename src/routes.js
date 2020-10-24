import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Agendamento from './pages/Agendamento';
import Register from './pages/Register';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/agendamento" component={Agendamento} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}