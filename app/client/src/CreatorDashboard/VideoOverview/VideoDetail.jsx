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
        this.setState({ data: res.data });
        console.log("Data from VideoDetails :", res.data);
      })
      .catch(err => console.log("error: ", err));
    
    document.getElementsByClassName("navbar-brand")[0].style.visibility="hidden"

    // setTimeout(()=> {
    //   document.getElementsByTagName("body")[0].classList.add('turn-white');
    // }, 1000)

    this.props.setCurrentPage("videoDetail")
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
    top: "0px"
  };

  P2Style = {
    fontFamily: "Lato",
    color: "grey",
    left: "45%",
    textAlign: "center",
    position: "absolute",
    top: "20%",
    marginBottom: "0"
  };
  render() {
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
