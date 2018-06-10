import React, { Component } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  navStyle = {
    margin: "10vh 15vw 0 15vw"
  };

  navLinks = {
    fontWeight: "500",
    textAlign: "right"
  };

  logoStyle = {
    fontWeight: "700",
    fontSize: "1.5em"
  };

  render() {
    return (
      <Navbar color="faded" light expand="md" style={this.navStyle}>
        <NavbarBrand tag={RRNavLink} to="/" style={this.logoStyle}>
          Sága
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar style={this.navLinks}>
            <NavItem>
              <NavLink exact activeClassName="active" tag={RRNavLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={RRNavLink} to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
