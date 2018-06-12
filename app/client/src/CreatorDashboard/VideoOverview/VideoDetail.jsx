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
    // const videoID = this.props.match.params.video_id;
    const dataPromise = new Promise((resolve, reject ) =>{
      const videoID = this.props.match.params.video_id;
      return (axios.get(`/api/videos/${videoID}/reactions`)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        console.log("error: ", err);
        reject(err)
      })
    )});
    //return
    dataPromise.then(res => {
      
      console.log("Data from VideoDetails axios call :");
      if (res.data) this.setState({ loading: false, data: res });
      console.log("state ", this.state);
    })
    .catch(err => {
      console.log("dataPromise err: ", err);
      this.setState({ loading: false, error: true });
      
    })
    // axios
    //   .get(`/api/videos/${videoID}/reactions`)
    //   .then(res => {
    //     console.log("Data from VideoDetails axios call :", res.data);
    //     if (res.data) this.setState({ loading: false });
    //     console.log("state ", this.state);
    
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false, error: true });
    //      console.log("error: ", err);
    //     })
    
    
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
  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }
  
  render() {
    // if (this.state.error === true) {
    //   return (
    //     <div style={this.NotFoundStyle}>
    //       <h1 style={this.PStyle}> Hmm...Check your server</h1>
    //       <NotFoundAnimation />
    //     </div>
    //   );
    // }
    // if (this.state.loading === true) {
    //   return (
    //     <div>
    //       <h1 style={this.P2Style}> Loading... </h1>
    //       <LoadingAnimation />
    //     </div>
    //   );
    // } 
    // if(this.state.loading === false && this.state.error === false)
    return (
      <div className="video-container" style={this.ContainerStyle}>
      <Sidebar />
      <iframe
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
    <SplineChart data={this.state} />
    <button
    type="button"
    class="btn btn-info navbar-btn"
    onClick={this.toggleSidebar.bind(this)}
    >
    <span>Toggle Sidebar</span>
    </button>
    </div>
  );
}
}

export default VideoDetail;
