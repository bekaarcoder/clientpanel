import React, { Component } from 'react'

class ClientsList extends Component {
  render() {
    const clients = [{
      id: '234234234',
      firstName: 'Shashank',
      lastName: 'Sharma',
      email: 'shashanksmat@gmail.com',
      phone: '8574378987',
      balance: '30'
    }, {
      id: '12312413',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johnd@gmail.com',
      phone: '1234567890',
      balance: '303'
    }];
    let clientsContent;
    if(clients && clients.length !==0) {
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
                <td><button className="btn btn-sm btn-secondary">View Details</button></td>
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
        {clientsContent}
      </div>
    )
  }
}

export default ClientsList;
