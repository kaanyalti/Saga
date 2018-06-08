import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class SideBar extends Component {
  Sidebarstyle = {
    backgroundColor: "#D7ECEF",
    color: "black",
    width: "30%",
    height: "100%",
    textAlign: "left",
    position: "fixed",
    paddingTop: "7%",
    top: "0px",
    lineHeight: "4",
    fontSize: "2em",
    listStyle: "none",
    paddingLeft: "5px",
    left: "0"
  };

  ItemStyle = {
    fontSize: "1.3em",
    fontWeight: "bolder",
    marginLeft: "-5px",
    paddingLeft: "5px"
  };

  Color = {
    color: "rgb(0, 121, 226)"
  };

  render() {
    return (
      <div>
        <div id="sidebar-wrapper">
          <ul style={this.Sidebarstyle} className="sidebar-nav">
            <li style={this.ItemStyle}>
              {" "}
              <a
                style={this.Color}
                href="https://images.unsplash.com/photo-1496434036277-c5a9e94ad3cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa4b1fdeedccfbda80c8b131a31593b6&auto=format&fit=crop&w=1050&q=80"
              >
                Dashboard
              </a>{" "}
            </li>
            <li style={this.ItemStyle}>
              {" "}
              <a style={this.Color}> Get A Quote </a>
            </li>
            <li style={this.ItemStyle}>
              {" "}
              <a style={this.Color}> My Orders </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
