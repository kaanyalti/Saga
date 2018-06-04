import React, { Component } from "react";

class LandingPage extends Component {
  LeftSideStyle = {
    position: "fixed",
    width: "50%",
    height: "100%",
    background: "#D7ECEF",
    float: "left"
    // zIndex: "1"
  }
  
  VideoStyle = {
    backgroundColor: "grey",
    width: "500px",
    height: "300px",
    marginTop: "20%",
    marginLeft: "15%"
    // zIndex: "1"
    
  }
  
  render(){
    return (
      <div>
      <div style={this.VideoStyle}>
      </div>
      <div style={this.LeftSideStyle}>
      </div>
      
      </div>
    )
  }
}

export default LandingPage