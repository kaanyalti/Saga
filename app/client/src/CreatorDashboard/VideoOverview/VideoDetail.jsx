import React from "react";
import axios from "axios";
import SplineChart from "../VideoAnalytics/SplineChart.jsx";
import DonutChart from "../VideoAnalytics/DonutChart.jsx";
import VideoComponent from "./VideoComponent";
import NotFoundAnimation from "./NotFoundAnimation.jsx";
// import * as Reactions from "../../modules/getVideoDataMethods";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const videoID = this.props.match.params.video_id;
    axios
      .get(`/api/videos/${videoID}/reactions`)
      .then(res => {
        console.log
        this.setState({ data: res.data });
        console.log( "Data from VideoDetails :", res.data)
      })
      .catch(err => console.log("error: ", err));
  }

  NotFoundStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    fontSize: "2em",
    color: "grey"
  };

  ContainerStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    left: "40%",
    top: "15%",
    flexDirection: "column",

  }

  VideoStyle = {
    width: "50%",
    height: "10%",
    padding: "10px",
    background: "#e0e0e0"
  }


  PStyle = {
    textAlign: "center",
    position: "absolute",
    zIndex: "10",
    top: "0px",
    fontWeight: "bolder"
  };

  // FoundOrNot = () => {
  //   return this.state.data;
  // };

  render() {
    console.log("Parent component passes down these props: ", this.state)
    // if (!this.FoundOrNot) {
    //   return (
    //   <div style = {this.NotFoundStyle}>
    //     <div> <NotFoundAnimation/> </div>
    //       <p style={this.PStyle} > Sorry, the video was not found. </p>
    //   </div>
    //   )
    // } else {
      return (<div className = "video-container" style = {this.ContainerStyle}>
        <VideoComponent youtubeVideoID={this.props.match.params.video_id} />
        <SplineChart data = {this.state} title = "Video Response Data"/>
        {/* <DonutChart data={this.state.data} videoData={this.props.videoData} />      */}

        {/*<Graph data = {this.state} title = "Video Respons Data"/>*/}
        <DonutChart
          data={this.state.data}
          videoData={this.props.videoData}
          youtubeVideoID={this.props.match.params.video_id}
        />
      </div>
    );
  }
  // }
}

export default VideoDetail;
         {/*<iframe
        //         width="100%"
        //         height="100%"
        //         src={`https://www.youtube.com/embed/${this.props.match.params.video_id}`}
        //         frameBorder="0"
        //         allow="autoplay; encrypted-media"
        //         allowFullScreen
        //         // style={this.VideoStyle}
        //       />
      */}