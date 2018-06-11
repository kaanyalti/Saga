import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import videoIDs from "../../fakeYouTubeRes.js";
import ZiggeoRecorder from "./ZiggeoRecorder";
import ZiggeoJSRecorder from "./ZiggeoJSRecorder";
import VideoComponent from "../../CreatorDashboard/VideoOverview/VideoComponent";
import {Container, Row, Col} from 'reactstrap';
// The VideoList component matches one of two different routes
// depending on the full pathname

class PublicVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeVideoID: this.props.match.params.video_id,
      youtubeVideoState: null
    };
    this.handleChangedVideoState = this.handleChangedVideoState.bind(this);
  }

  componentDidMount() {
    console.log("YOUTUBE ID", this.state.youtubeVideoID);
  }

  handleChangedVideoState(newVideoState) {
    console.log("NEW VIDEO STATE", newVideoState);
    this.setState({ youtubeVideoState: newVideoState });
  }

  containerStyle = {
    display: "flex",
    flexDirection: "column"
  }

  rowStyle = {
    display: "flex",
    flexDirection: "column"
  }

  colCentered = {
      float: "none",
      margin: "0 auto"
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 mb-53+">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <VideoComponent
                youtubeVideoID={this.state.youtubeVideoID}
                handleChangedVideoState={this.handleChangedVideoState}
              />

              <div className="card-block">
                <div className="row mt-3">
                  <div className="col-md-5 col-sm-12">
                    <ZiggeoJSRecorder
                      youtubeVideoID={this.state.youtubeVideoID}
                      youtubeVideoState={this.state.youtubeVideoState}
                    />
                  </div>
                  <div className="col-md-7 col-sm-12">
                    <h3 className="cardTitle">LOREM</h3>
                    <p className="card-text">LOREM IPSUM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicVideo;
