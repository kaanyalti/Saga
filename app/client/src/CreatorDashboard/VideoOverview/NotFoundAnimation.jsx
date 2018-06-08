import React from "react";
import lottie from "lottie-web";
import {NotFoundEmoji} from "./NotFound"

class NotFoundAnimation extends React.Component {
componentDidMount(){
  lottie.loadAnimation({
    container: document.getElementById("not-found"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: NotFoundEmoji,
})
}
render () { 
   lottie.setSpeed(3)
  return (
    <div id = "not-found"> </div>
  )
}
}

export default NotFoundAnimation