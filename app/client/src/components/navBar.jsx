import React, { Component } from "react";
import GoogleSignIn from "./googleSignIn";
import GoogleSignOut from "./googleSignOut";

class Navbar extends Component {
  navStyle = {
    position: "fixed",
    width: "100%",
    overlay: "hidden",
    top: "0"
  }
  
  spanStyle = {
    float: "left",
    color: 'grey',
    fontFamily: 'Montserrat',
    fontWeight: "bolder",
    fontSize: "2em"
  }
  
  LoginStyle = {
    float: "right",
    color: "grey",
    marginRight: "10px"
  }

  ButtonStyle = {
    marginLeft: "10px",
    marginRight: "10px"
  }

  UnderlineStyle = {
    width: "50px",
    height: "5px",
    backgroundColor: "#D7ECEF",
    position: "absolute",
    right: "65px",
  }
  
  
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={this.navStyle}>
      <span style={this.spanStyle}> Sága</span>
      <span style={this.LoginStyle}> 
      <a style={this.ButtonStyle}>Home</a>
      <a style={this.LoginStyle}>Login</a>
      <div style={this.UnderlineStyle}></div>
      </span>
      {/* <GoogleSignIn /> */}
      {/* <GoogleSignOut /> */}
      </nav>
    );
  }
}

export default Navbar;
