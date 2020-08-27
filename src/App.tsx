import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Users from './Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/">
          <Redirect to="/users/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
