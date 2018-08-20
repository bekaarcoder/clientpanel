import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types'

class ClientsList extends Component {
  state = {
    totalOwed: null
  };

  static getDerivedStateFromProps(props, state) {
    const {clients} = props;
    if(clients) {
      const total = clients.reduce((total, current) => {
        return total + parseFloat(current.balance.toString());
      }, 0);
      return {
        totalOwed: total
      };
    }
  }

  // this method is going to be deprecated
  /* componentWillReceiveProps(nextProps) {
    if(nextProps.clients) {
      const total = nextProps.clients.reduce((total, current) => {
        return total + parseFloat(current.balance.toString());
      }, 0);
      this.setState({
        totalOwed: total
      });
    }
  } */

  render() {
    const {clients} = this.props;
    const {totalOwed} = this.state;
    let clientsContent;
    if(clients && clients.length !== 0) {
      clientsContent = (
        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td>{client.firstName + " " + client.lastName}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.balance}</td>
                <td><Link to={`/client/${client.id}`} className="btn btn-sm btn-secondary">View Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    } else {
      clientsContent = (
        <p className="text-center">No Records Found</p>
      )
    }
    return (
      <div>
        <h2 className="lead">Clients</h2>
        {totalOwed !== null &&
          <div className="text-right"><strong>Total Owed: </strong>Rs.{parseFloat(totalOwed).toFixed(2)}</div>
        }
        {clientsContent}
      </div>
    )
  }
}

ClientsList.propTypes = {
  clients: PropTypes.array,
  firestore: PropTypes.object.isRequired
}

export default compose(
  firestoreConnect([{collection: 'clients'}]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(ClientsList);
