import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class ClientDetails extends Component {
  render() {
    const {client} = this.props;
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          {client && <h2>{client.firstName}'s Detail</h2>}
        </div>
      </div>
    )
  }
}

export default compose(
  firestoreConnect((props) => [{
    collection: 'clients',
    storeAs: 'client',
    doc: props.match.params.id
  }]),
  connect(({firestore: {ordered}}, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
