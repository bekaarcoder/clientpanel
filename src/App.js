import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppNavbar />
          <div className="container-fluid">
            <h1>Client Panel</h1>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
