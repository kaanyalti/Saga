import React from "react";
import lottie from "lottie-web";
import {Login} from "./Login.js"

class LoginAnimation extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById("test"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Login
    });
  }
  render(){
    return <div id="test"> </div>
  }
}

export default LoginAnimation