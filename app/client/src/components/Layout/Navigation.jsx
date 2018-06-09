import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Navigation extends Component {

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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <Link to="/">
              Sága
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </Nav>
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
