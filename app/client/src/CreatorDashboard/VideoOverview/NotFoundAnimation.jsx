import React from "react";
import lottie from "lottie-web";
import { NotFoundEmoji } from "./NotFound";

class NotFoundAnimation extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById("not-found"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NotFoundEmoji
      
    });
  }
  AnimationStyle ={
    paddingTop: "40%"
  }
  render() {
    return <div id="not-found" style={this.AnimationStyle}> </div>;
  }
}

export default NotFoundAnimation;
