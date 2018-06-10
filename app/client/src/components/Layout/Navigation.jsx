import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    margin: "10vh 15vw 0 15vw",
  };

  logoStyle = {
    fontWeight: "bold",
    fontSize: "1.5em"
  }

  // ButtonStyle = {
  //   float: "right",
  //   color: "black",
  //   fontWeight: "bolder",
  //   fontSize: "2em"
  // };

  render() {
    return (
      <Navbar color="faded" light expand="md" style={this.navStyle}>
        <NavbarBrand tag={Link} to="/" style={this.logoStyle}>
          Sága
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">
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
