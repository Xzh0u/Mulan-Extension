import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import Player from './pages/Player';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Mulan - Video Assistant</title>
      </Helmet>
      <Switch>
        <Route exact path="/player" component={Player} />
        <Route path="/home" component={Home} />
        <Route path="/404">
          <div>404</div>
        </Route>
        <Redirect to="/player" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
