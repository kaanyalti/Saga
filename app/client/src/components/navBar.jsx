import React, { Component } from "react";
import GoogleSignIn from "./googleSignIn";
import GoogleSignOut from "./googleSignOut";
import {Navbar} from "react-bootstrap"

class NavBar extends Component { //not the bootsrap component Navbar
  navStyle = {
    marginBottom: "0",
    paddingBottom: "10px",
    color: "#D7ECEF"
  }
  
  spanStyle = {
    float: "left",
    color: 'grey',
    fontFamily: 'Montserrat',
    fontWeight: "bolder",
    fontSize: "2em"
  }
  
  LoginStyle = {
    position: "absolute",
    right: "10px",
    paddingTop: "10px"
  }

  HomeStyle = {
    position: "absolute",
    paddingTop: "10px",
    right: "65px"
  }

 

  UnderlineHome = {
    marginRight: "5px",
    width: "50px",
    height: "5px",
    backgroundColor: "#D7ECEF",
    position: "absolute",
    right: "65px",
  }

  UnderlineLogin = {
    marginRight: "5px",
    marginLeft: "2px",
    width: "50px",
    height: "5px",
    backgroundColor: "#D7ECEF",
    position: "absolute",
    right: "13px",
  }
  
  
  render() {
    return (
      <Navbar style={this.navStyle}>
      <span style={this.spanStyle}> Sága</span>
      <span> 
      <Navbar.Link style={this.HomeStyle}>Home</Navbar.Link>
      <Navbar.Link style={this.LoginStyle}>Login</Navbar.Link>
      <div className="log-buttons">
      </div>
      </span>
      {/* <GoogleSignIn /> */}
      {/* <GoogleSignOut /> */}
      </Navbar>
    );
  }
}

export default NavBar;
