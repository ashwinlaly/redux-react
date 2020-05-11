import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import dashboard from './page/Dashboard';
import posts from './page/Postpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={dashboard}/>
        <Route exact path="/posts" component={posts}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;