import React, { Component } from "react";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"
class LandingPage extends Component {
  LeftSideStyle = {
    height: "505px",
    background: "#D7ECEF",
    borderRadius: "0"
  }
  
  NavBarStyle = {
    marginBottom: "0"
  }
  
 
  VideoStyle = {
    width: "75%",
    backgroundColor: "grey",
    height: "60%",
    zIndex: "999",
    position: "fixed",
    top: "20%",
    borderRadius: "0px",
    right: "10%",
    marginBottom: "0"
  }
  
  DescriptionStyle = {
    backgroundColor: "#fcfcfc",
    color: "black",
    height: "353.594px",
    width: "50%",
    textAlign: "center",
    top: "35%",
    right: "10%",
    float: "right",
    borderRadius: "0"
  }
  
  render(){
    return (
      <Grid>
        <Row className="show-grid">
        <div className="container">
          <Col xs={12} md={8}>
            <Grid style={this.VideoStyle}>
              <Row className="show-grid">
                <Col xs={12} md={8}>
                  <Jumbotron style={this.DescriptionStyle}>
                  Welcome to Sága. We don't know what to say yet
                  but we will by wednesday night:)
                  </Jumbotron>
                </Col>
              </Row>
            </Grid>
          </Col>
            </div>
        </Row>
      
      <Row className="show-grid">
      <Col xs={6} md={6}>
      <Jumbotron style={this.LeftSideStyle}>
      </Jumbotron>   
      </Col>
      </Row>
      </Grid>
      // <div>
      // <Grid >
      // <Row>
      // <col md={6}>
      // <code>
      // <Jumbotron style={this.VideoStyle}>
      // </Jumbotron>
      // </code>
      // </col>
      // </Row>
      // <Jumbotron style={this.LeftSideStyle}>
      // </Jumbotron>
      // <Jumbotron style={this.DescriptionStyle}>
      // Welcome to Sága. We don't know what to say yet
      // but we will by wednesday night:)
      // </Jumbotron>
      // </Grid>
      // </div>
    )
  }
}

export default LandingPage