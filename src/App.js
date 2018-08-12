import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import './App.css';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
