import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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

  LogoStyle = {
    fontWeight: "bold",
    fontSize: "3em"
  };

  // ButtonStyle = {
  //   float: "right",
  //   color: "black",
  //   fontWeight: "bolder",
  //   fontSize: "2em"
  // };

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
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

/*

<nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
</nav>

*/
