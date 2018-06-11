import React from "react";
import {Loading} from "./Loading";
import lottie from "lottie-web";

class LoadingAnimation extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById("loading-graphs"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Loading
    });
  }

  AnimationStyle = {
    width: "25%",
    position: "absolute",
    left: "40%",
    top: "60%",
  }

  render() {
    return <div id="loading-graphs" style={this.AnimationStyle}> </div>;
  }
}
export default LoadingAnimation