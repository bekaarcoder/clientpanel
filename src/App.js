import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import AppNavbar from './components/layout/AppNavbar';
import './App.css';
import Dashboard from './components/layout/Dashboard';

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
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
