import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import videoIDs from "../../fakeYouTubeRes.js";
import ZiggeoRecorder from "./ZiggeoRecorder";
import ZiggeoJSRecorder from "./ZiggeoJSRecorder"
import VideoComponent from "../../CreatorDashboard/VideoOverview/VideoComponent";

// The VideoList component matches one of two different routes
// depending on the full pathname

class PublicVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeVideoID: this.props.match.params.video_id,
      youtubeVideoState: null
    }
    this.handleChangedVideoState = this.handleChangedVideoState.bind(this);
  }

  componentDidMount(){
    console.log("YOUTUBE ID", this.state.youtubeVideoID)
  }

  handleChangedVideoState(newVideoState) {
    console.log("NEW VIDEO STATE",newVideoState);
    this.setState({youtubeVideoState: newVideoState});
  }

  render() {
    return (
      <div>
        <VideoComponent youtubeVideoID={this.state.youtubeVideoID} handleChangedVideoState={this.handleChangedVideoState}/>
        <ZiggeoJSRecorder  youtubeVideoID={this.state.youtubeVideoID} youtubeVideoState={this.state.youtubeVideoState}/>
      </div>
    );
  }
}

export default PublicVideo;
