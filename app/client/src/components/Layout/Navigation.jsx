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
  // navStyle = {
  //   position: "fixed",
  //   width: "100%",
  //   paddingTop: "10px",
  //   backgroundColor: "rgba(0,0,0,0.0)",
  //   zIndex: "10",
  //   paddingLeft: "10px"
  // };

  // Black = {
  //   color: "black"
  // };

  // LogoStyle = {
  //   fontWeight: "bold",
  //   fontSize: "3em"
  // };

  // ButtonStyle = {
  //   float: "right",
  //   color: "black",
  //   fontWeight: "bolder",
  //   fontSize: "2em"
  // };

  render() {
    return (
      <Navbar color="faded" light expand="md">
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
