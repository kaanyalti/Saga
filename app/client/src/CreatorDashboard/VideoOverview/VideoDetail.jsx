import React from "react";
import videoIDs from "../../fakeYouTubeRes.js";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import NotFoundAnimation from "./NotFoundAnimation.jsx";

class Video extends React.Component {
  constructor ( props ) {
    super ( props)
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
    if (videoIDs.videoIDs[0].id !== this.props.match.params.video_id) {
      console.log("Params are different from youtube data");
        return <div style = {this.NotFoundStyle}>
        <div> <NotFoundAnimation/> </div>
        <p style={this.PStyle} > Sorry, the video was not found. </p> 
        </div>;
      }
  }
  mapfunc = videoIDs.videoIDs.map( v => {
    console.log(v.id);
    return v.id
  })

  render (){
    this.mapfunc
    return (
      <div>
        <h1>Individual video page</h1>
        {/* <h2>{videoIDs}</h2> */}
        {this.FoundOrNot()}
        <Link to="/videos">Back</Link>
      </div>
    );
};
}
export default Video;
