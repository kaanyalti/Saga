import React from "react";
import lottie from "lottie-web";
import {Square} from "./Square";

class HomeAnimation extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById("home-square"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Square
    });
    lottie.setSpeed(0.2);
  }

  AnimationStyle = {
    zIndex: "1",
    filter: "grayscale(60%)",
    position: "absolute",
    left: "23%",
    width: "26%",
    transform: "scaleX(1.9)",
    opacity: "0.2",
    height: "53%"
  }
  
  render() {

    return (<div id="home-square" style={this.AnimationStyle}> 
    </div>);
  }
}
export default HomeAnimation