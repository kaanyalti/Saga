import React, { Component } from "react";
import GoogleSignIn from "./googleSignIn";
import GoogleSignOut from "./googleSignOut";
import Navbar from "react-bootstrap";

class NavBar extends Component {
  //not the bootsrap component Navbar
  navStyle = {
    color: "rgb(215, 236, 239)",
    marginBottom: "0",
    border: "0px"
  };

  spanStyle = {
    float: "left",
    color: "rgb(20, 139, 157)",
    fontFamily: "Montserrat",
    fontWeight: "bolder",
    fontSize: "2em"
  };

  LoginStyle = {
    position: "absolute",
    right: "10px",
    paddingTop: "10px",
    color: "rgb(20, 139, 157)"
  };

  HomeStyle = {
    position: "absolute",
    paddingTop: "10px",
    right: "65px",
    color: "rgb(20, 139, 157)"
  };

  render() {
    return (
      <Navbar style={this.navStyle}>
        <span style={this.spanStyle}> Sága</span>
        <span>
          <Navbar.Link style={this.HomeStyle}>Home</Navbar.Link>
          <Navbar.Link style={this.LoginStyle}>Login</Navbar.Link>
          <div className="log-buttons" />
        </span>
        {/* <GoogleSignIn /> */}
        {/* <GoogleSignOut /> */}
      </Navbar>
    );
  }
}

export default NavBar;
