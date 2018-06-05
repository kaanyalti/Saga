import React, { Component } from "react";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap";

class SideBar extends Component {
  Sidebarstyle = {
    backgroundColor: "#D7ECEF",
    color: "#797777",
    width: "30%",
    height: "100%",
    textAlign: "left",
    position: "fixed",
    fontSize: "1.2em",
    paddingTop: "7%",
    top: "0px"
  }
  render (){
    return (
    <div style={this.Sidebarstyle}> 
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li >         
          Get A Quote
        </li>
        <li >
            My Orders
        </li>
      </ul>
    </div>
  </div>
  )
  }
}

export default SideBar