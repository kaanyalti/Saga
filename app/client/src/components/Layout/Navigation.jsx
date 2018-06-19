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
import Logo from "../../logo.svg"

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
    fontFamily: "Lato",
    fontWeight: "700"
  };

  navLinks = {
    fontWeight: "500",
    textAlign: "right"
  };

  logoStyle = {
    fontWeight: "700",
    fontSize: "1.5em"
  };

  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  render() {
    const linkTo = this.props.loggedIn ? (
      <NavLink activeClassName="active" tag={RRNavLink} to="/admin">
        Dashboard
      </NavLink>
    ) : (
      <NavLink activeClassName="active" tag={RRNavLink} to="/login">
        Login
      </NavLink>
    );
    return (
      <Navbar color="faded" light expand="md" style={this.navStyle}>
        <NavbarBrand tag={RRNavLink} to="/" style={this.logoStyle}>
          <img src={Logo} style={{height: "30px", marginBottom: "6px"}} alt="Saga logo"/>  Sága
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar style={this.navLinks}>
            <NavItem>
              <NavLink exact activeClassName="active" tag={RRNavLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>{linkTo}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
