import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default class NavView extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light" expand="lg">
          <NavLink className="navLink" to="/">
            <NavbarBrand>
              <h1>Doodle God Utility</h1>
            </NavbarBrand>
          </NavLink>
          <Nav className="ml-auto">
            <AuthOptions />
          </Nav>
        </Navbar>
      </>
    );
  }
}
