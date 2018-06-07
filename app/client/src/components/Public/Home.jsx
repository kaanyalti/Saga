import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class Home extends Component {
  LeftSideStyle = {
    height: "100%",
    background: "linear-gradient(90deg, rgba(215,236,239,1) 50%, rgba(255,255,255,1) 50%)",
    borderRadius: "0",
    position: "fixed",
    width: "100%",
    left: "0px",
    top: "0px",
    zIndex: "0"
  };

  TitleStyle = {
    fontSize: "3em"
  };

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
  };

  DescriptionStyle = {
    backgroundColor: "#fcfcfc",
    color: "black",
    height: "100%",
    width: "35%",
    right: "0",
    textAlign: "center",
    position: "absolute",
    borderRadius: "0"
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col>
            <Grid style={this.VideoStyle}>
              <Row className="show-grid">
                <Col>
                  <Jumbotron style={this.DescriptionStyle}>
                    <h1 style={this.TitleStyle}>Welcome to Sága.</h1>
                    We don't know what to say yet but we will by wednesday
                    night:)
                  </Jumbotron>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
        <Row className="show-grid">
            <div style={this.LeftSideStyle} />
        </Row>
      </Grid>
    );
  }
}

// export default LandingPage

export default Home;
