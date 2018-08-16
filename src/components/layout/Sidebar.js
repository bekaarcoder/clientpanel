import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Link to="/client/add-client" className="btn btn-sm btn-block btn-success">
          <i className="fas fa-plus fa-sm"></i> Add New
        </Link>
      </div>
    )
  }
}

export default Sidebar;
