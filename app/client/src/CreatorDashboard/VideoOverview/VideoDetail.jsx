import React from "react";
import axios from "axios";
import SplineChart from "../VideoAnalytics/SplineChart.jsx";
import DonutChart from "../VideoAnalytics/DonutChart.jsx";
import LoadingAnimation from "../VideoAnalytics/LoadingAnimation.jsx";
// import VideoComponent from "./VideoComponent";
import NotFoundAnimation from "./NotFoundAnimation.jsx";
import Sidebar from "../../components/Layout/Sidebar.jsx";
// import * as Reactions from "../../modules/getVideoDataMethods";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    const videoID = this.props.match.params.video_id;
    axios
      .get(`/api/videos/${videoID}/reactions`)
      .then(res => {
        console.log("Data from VideoDetails axios call :", res.data.length);
        if (res.data.length > 0) this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
         console.log("error: ", err);
        })
  }

  NotFoundStyle = {
    width: "20%",
    position: "fixed",
    left: "50%",
    top: "35%",
    fontSize: "2em",
    color: "grey"
  };

  PStyle = {
    fontFamily: "Lato",
    textAlign: "center",
    position: "absolute",
    top: "0px",
  };

  P2Style = {
    fontFamily: "Lato",
    color: "grey",
    left: "45%",
    textAlign: "center",
    position: "absolute",
    top: "20%",
    marginBottom: "0"

  }
  render() {
    if (this.state.error === true) {
      return (
        <div style={this.NotFoundStyle}>
          <h1 style={this.PStyle}> Hmm...Check your server</h1>
          <NotFoundAnimation />
        </div>
      );
    }
    if (this.state.loading === true) {
      return (
        <div>
          <h1 style={this.P2Style}> Loading... </h1>
          <LoadingAnimation />
        </div>
      );
    }
    return (

      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card bg-transparent" style={{"border-width": "0px"}}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${
                    this.props.match.params.video_id
                  }`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <div className="card-block">
                <div className="row mt-3">
                  <div className="col">
                    <div style={{"min-height" : "400px"}}>
                      <DonutChart
                        data={this.state.data}
                        videoData={this.props.videoData}
                        youtubeVideoID={this.props.match.params.video_id}
                      />
                    </div>
                    <div className="col" >
                      <div style={{"min-height" : "400px"}}>
                        <SplineChart data={this.state} />
                      </div>
                    </div>
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

export default VideoDetail;
