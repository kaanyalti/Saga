import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Home extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.setCurrentPage("home")
    document.getElementsByClassName("navbar-brand")[0].style.visibility="visible"
  }

  containerStyle = {
    backgroundColor: "#fcfcfc",
    marginTop: "5vh",
    animation: "3s !important"
  };

  splashImg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1495707800306-e240c5a0d65f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c67444b12873fc59a464db7f7abda2a0&auto=format&fit=crop&w=1190&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
  };

  splashDescription = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  };

  render() {
    return (
      <Container id="mainpage" style={this.containerStyle}>
        <Row >
          <Col md="8" style={this.splashImg} />
          <Col md="4" style={this.splashDescription}>
            <h1>Video analytics made easy.</h1>
            <p >
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
