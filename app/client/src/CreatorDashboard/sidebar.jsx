import React, { Component } from "react";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"

class SideBar extends Component {
  style = {
    backgroundColor: "D7ECEF",
    color: "black",
    width: "20%",
    textAlign: "left"
  }
  render (){
    return (<div style={{width:'30%'}}> 
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li >         Get A Quote
          
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