import React, { Component } from 'react'

class AddClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: ''
  };

  onChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Add Client</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        minLength="3"
                        required
                        onChange={this.onChange}
                        value={this.state.firstName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        minLength="3"
                        required
                        onChange={this.onChange}
                        value={this.state.lastName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        minLength="10"
                        required
                        onChange={this.onChange}
                        value={this.state.phone}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="balance">Balance</label>
                      <input
                        type="text"
                        name="balance"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.balance}
                      />
                    </div>
                    <input type="submit" value="Add New Client" className="btn btn-block btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddClient;
