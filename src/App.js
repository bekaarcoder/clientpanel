import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import AppNavbar from './components/layout/AppNavbar';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/client/add-client" component={AddClient} />
                <Route path="/client/:id" component={ClientDetails} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
