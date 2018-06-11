import React from "react";
import axios from "axios";
import SplineChart from "../VideoAnalytics/SplineChart.jsx";
import DonutChart from "../VideoAnalytics/DonutChart.jsx";
import LoadingAnimation from "../VideoAnalytics/LoadingAnimation.jsx";

// import VideoComponent from "./VideoComponent";
import NotFoundAnimation from "./NotFoundAnimation.jsx";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group"; 
// import { CSSTransition, transit } from "react-css-transition";
// import * as Reactions from "../../modules/getVideoDataMethods";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      ready: false,
      error: true
    };
  }
  
  componentDidMount() {
    const videoID = this.props.match.params.video_id;
    axios
      .get(`/api/videos/${videoID}/reactions`)
      .then(res => {
        console.log("Data from VideoDetails :", res.data);
        this.setState({loading:false, ready: true, error: false})
      })
      .catch(err => console.log("error: ", err));
      this.setState({error:true, ready: false})
  }

  NotFoundStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    width: "100%",
    left: "20%",
    top: "30%",
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
    flexDirection: "column"
  };

  IframeStyle = {
    opacity: "1",
  }
  VideoStyle = {
    width: "50%",
    height: "10%",
    padding: "10px",
    background: "#e0e0e0"
  };

  PStyle = {
    textAlign: "center",
    position: "relative",
    zIndex: "10",
    top: "0px",
    fontWeight: "bold",
    color: "grey"
  };

  
 
  render() {
    console.log("state ", this.state)
    // if(this.state.ready === false){
    // return ( <div style={this.NotFoundStyle}> 
    //   <h1 style={this.PStyle}> Loading...</h1>
    //   <LoadingAnimation />
    //   </div>)
    // } 
     if (this.state.error === true){
      return (<div>
      <h1 style={this.PStyle}> No data found </h1>
      <NotFoundAnimation/>
      </div>
      )
    }
      return (
      <div className="video-container" style={this.ContainerStyle}>
        <iframe style={this.IframeStyle}
          src={`https://www.youtube.com/embed/${
            this.props.match.params.video_id
          }`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <DonutChart
          data={this.state.data}
          videoData={this.props.videoData}
          youtubeVideoID={this.props.match.params.video_id}
        />
        <SplineChart data={this.state} loading={this.state.loading} error={this.state.error}/>
      </div>
    );}
}

export default VideoDetail;
