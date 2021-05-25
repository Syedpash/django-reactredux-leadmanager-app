import './App.css';
import React, { Component, useEffect } from 'react';
import Header from './components/Layout/Header';
import { Container } from 'reactstrap';
import Dashboard from './components/Leads/Dashboard';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alert from './components/Layout/Alert';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Accounts/Login';
import Register from './components/Accounts/Register';
import PrivateRoute from './components/common/PrivateRoute';
import { loadUser } from './actions/auth';
import store from './Store';

const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
}
class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Header />
          <Alert />
          <Container>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </Container>
        </AlertProvider>
      </Router>
    );
  }
}

export default App;
