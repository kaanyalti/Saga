import React, { Component } from "react";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"

class Home extends Component {

  LeftSideStyle = {
    height: "100%",
    background: "#D7ECEF",
    borderRadius: "0",
    position: "fixed",
    width: "50%",
    left: "0px",
    top: "0px",
    zIndex: "0"
  }

  TitleStyle = {
    fontSize: "3em"
  }

  VideoStyle = {
    width: "75%",
    backgroundColor: "rgb(220, 220, 220)",
    height: "60%",
    zIndex: "999",
    position: "fixed",
    top: "20%",
    borderRadius: "0px",
    marginBottom: "0",
    padding: "0"
  }

  DescriptionStyle = {
    backgroundColor: "#fcfcfc",
    color: "black",
    height: "392.594px",
    width: "42.6%",
    textAlign: "center",
    top: "35%",
    float: "right",
    position: "relative",
    borderRadius: "0"
  }

  render(){
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Grid style={this.VideoStyle}>
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <Jumbotron style={this.DescriptionStyle}>
                    <h1 style={this.TitleStyle}>Welcome to Sága.</h1>
                     We don't know what to say yet
                    but we will by wednesday night:)
                  </Jumbotron>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <Jumbotron style={this.LeftSideStyle}>
            </Jumbotron>   
          </Col>
        </Row>
      </Grid>

    )
  }
}

// export default LandingPage

export default Home;
