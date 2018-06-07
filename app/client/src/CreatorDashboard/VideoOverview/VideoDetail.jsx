import React from "react";
import videoIDs from "../../fakeYouTubeRes.js";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
// import {NotFoundEmoji} from "./NotFound";
import NotFoundAnimation from "./NotFoundAnimation.jsx";

class Video extends React.Component {
  constructor ( props ) {
    super ( props)
    this.state = {
      video: null
      // videoIDs.get(props.match.params.video_id);
    }
  }

   NotFoundStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    fontSize: "2em",
    color: "grey"
  }

  PStyle = {
    textAlign: "center",
    position: "absolute",
    zIndex: "10",
    top: "0px",
    fontWeight: "bolder"
  }
  
  FoundOrNot = () => {
    if (!this.state.video) {
        return <div style = {this.NotFoundStyle}>
        <div> <NotFoundAnimation/> </div>
        <p style={this.PStyle}> Sorry, the video was not found. </p> 
        </div>;
      }
  }

  
  
   

  render (){
  return (
    <div id="none">
      <h1>Individual video page</h1>
      {/* <h2>{video.title}</h2> */}
      {this.FoundOrNot()}
      <Link to="/videos">Back</Link>
    </div>
  );
};
}
export default Video;
