import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import Player from './pages/Player';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        {/* TODO: rename */}
        <title>Mulan - video helper</title>
      </Helmet>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/player" component={Player} />
        <Route path="/404">
          <div>404</div>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
