import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  navStyle = {
    position: "fixed",
    width: "100%"
  };

  spanStyle = {
    float: "left",
    color: "rgba(193, 193, 193, 0.8)",
    fontFamily: "Montserrat",
    fontWeight: "bolder",
    fontSize: "2em"
  };
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
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
      </nav>
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
