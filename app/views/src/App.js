import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Util
import { validateToken } from './utils';

// Components
import LoginPage from './components/auth/Login';
import HomePage from './components/dashboard/Dashboard';
import Layout from './components/layout/Layout';

import './App.css';

if(localStorage.jwtToken) {
  validateToken();
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Layout>
            <Route path="/dashboard" component={HomePage} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;
