import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import dashboard from './page/Dashboard';
import posts from './page/Postpage';
import Sociallogin from './page/Sociallogin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={dashboard}/>
        <Route exact path="/posts" component={posts}/>
        <Route exact path="/fblogin" component={Sociallogin}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;