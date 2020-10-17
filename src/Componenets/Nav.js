import React, { Component } from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <NavbarBrand>
            <h1>Doodle God Utility</h1>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
