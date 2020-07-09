import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import Player from './pages/Player';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Mulan - video helper</title>
      </Helmet>
      <Switch>
        <Route path="/home" component={Home} />
        {/* TODO: /player */}
        <Route path="*" component={Player} />
        <Redirect to="/404">404</Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
