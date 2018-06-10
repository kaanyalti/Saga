import React from "react";
import Loading from "./Loading";

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
  render() {
    return <div id="loading-graphs"> </div>;
  }
}
