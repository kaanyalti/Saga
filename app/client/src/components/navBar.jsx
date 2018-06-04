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
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={this.navStyle}>
      <span style={this.spanStyle}> Sága</span>
      <span style={this.LoginStyle}> 
      <a style={this.ButtonStyle}>Home</a>
      <a style={this.LoginStyle}>Login</a>
      <div className="log-buttons">
      <div style={this.UnderlineHome}>
      </div>
      <div style={this.UnderlineLogin}>
      </div>
      </div>
      </span>
      {/* <GoogleSignIn /> */}
      {/* <GoogleSignOut /> */}
      </nav>
    );
  }
}

export default Navbar;
