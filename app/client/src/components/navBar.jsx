import React, { Component } from "react";

class Navbar extends Component {
  navStyle = {
    position: "fixed",
    width: "100%",
  }
  
  spanStyle= {
    float: "left",
    color: 'rgba(193, 193, 193, 0.8)',
    fontFamily: 'Montserrat',
    fontWeight: "bolder",
    fontSize: "2em"
  }
  render() {
    return (
      <nav id="navbar" style={this.navStyle}>
      <span style={this.spanStyle}> Sága</span>
      </nav>
    );
  }
}

export default Navbar;
