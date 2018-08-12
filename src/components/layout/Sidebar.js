import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Link to="/client/add" className="btn btn-sm btn-block btn-success">
          <i class="fas fa-plus fa-sm"></i> Add New
        </Link>
      </div>
    )
  }
}

export default Sidebar;
