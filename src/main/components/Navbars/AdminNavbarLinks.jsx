import React, { Component } from "react";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav pullRight>
            <NavDropdown
              eventKey={2}
              title="Setting"
              id="basic-nav-dropdown-right"
            >
              <MenuItem eventKey={2.1}>Action</MenuItem>
              <MenuItem eventKey={2.2}>Another action</MenuItem>
              <MenuItem eventKey={2.3}>Something</MenuItem>
              <MenuItem eventKey={2.4}>Another action</MenuItem>
              <MenuItem eventKey={2.5}>Something</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.5}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
