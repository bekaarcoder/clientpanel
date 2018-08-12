import React, { Component } from 'react'
import ClientsList from '../clients/ClientsList';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Dashboard</h2>
          <div className="row mt-2">
            <div className="col-md-10">
              <ClientsList />
            </div>
            <div className="col-md-2">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
