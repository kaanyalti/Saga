import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Home extends Component {
  // LeftSideStyle = {
  //   height: "100%",
  //   background:
  //     "linear-gradient(90deg, rgba(215,236,239,1) 50%, rgba(255,255,255,1) 50%)",
  //   borderRadius: "0",
  //   position: "fixed",
  //   width: "100%",
  //   left: "0px",
  //   top: "0px",
  //   zIndex: "0"
  // };

  // TitleStyle = {
  //   fontSize: "3em"
  // };

  // VideoStyle = {
  //   width: "75%",
  //   backgroundColor: "rgb(220, 220, 220)",
  //   height: "60%",
  //   zIndex: "999",
  //   position: "fixed",
  //   top: "20%",
  //   borderRadius: "0px",
  //   marginBottom: "0",
  //   padding: "0"
  // };

  // DescriptionStyle = {
  //   backgroundColor: "#fcfcfc",
  //   color: "black",
  //   height: "100%",
  //   width: "35%",
  //   right: "0",
  //   textAlign: "center",
  //   position: "absolute",
  //   borderRadius: "0"
  // };
  containerStyle = {
    backgroundColor: "#fcfcfc",
    marginTop: "10vh"
  };

  splashImg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1465244085115-0c89caa46915?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bc64c67c45a8dd5d5954183bbc1fd21&auto=format&fit=crop&w=1050&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh"
  };



  render() {
    return (
      <Container style={this.containerStyle}>
        <Row>
          <Col md="8" style={this.splashImg} />
          <Col md="4">
            <h1>Video analytics made easy.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              molestiae nostrum perspiciatis consequatur maxime nesciunt eaque!
              Repudiandae a voluptates, nam sed dolorum, dicta officiis!
              Incidunt explicabo eum quam placeat culpa.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

// export default LandingPage

export default Home;
