import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  navStyle = {
    position: "fixed",
    width: "100%",
    paddingTop: "10px",
    backgroundColor: "rgba(0,0,0,0.0)",
    zIndex: "10"
  }

  LogoStyle ={
    float: "left",
    color: "black",
    fontWeight: "bolder",
    fontSize: "3em"
  }

  ButtonStyle = {
    float: "right",
    color: "rgba(193, 193, 193, 0.8)",
    fontWeight: "bolder",
    fontSize: "2em"
  }

  render() {
    return (
      <div style={this.navStyle} className="navbar navbar-light">
      <span style={this.LogoStyle}> Sága </span>
        <ul style={this.ButtonStyle} className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

/*

<nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
</nav>

*/
