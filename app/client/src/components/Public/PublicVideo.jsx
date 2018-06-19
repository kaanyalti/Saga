import React from "react";
import ZiggeoRecorder from "./ZiggeoRecorder";
import ZiggeoJSRecorder from "./ZiggeoJSRecorder";
import VideoComponent from "../../CreatorDashboard/VideoOverview/VideoComponent";
import axios from 'axios';

// The VideoList component matches one of two different routes
// depending on the full pathname

class PublicVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeVideoID: this.props.match.params.video_id,
      youtubeVideoState: null,
      channelTitle: null,
      videoTitle: null,
      videoDesc: null
    };
    this.handleChangedVideoState = this.handleChangedVideoState.bind(this);
  }

  componentDidMount() {
    console.log("YOUTUBE ID", this.state.youtubeVideoID);
    console.log("PROPS", this.props);
    document.getElementsByClassName("navbar-brand")[0].style.visibility="visible"
    const videoDetails = new Promise((resolve,reject) => {
      axios
      .get(`https://www.googleapis.com/youtube/v3/videos?id=${
                        this.state.youtubeVideoID
                      }&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo&part=snippet,statistics`)
      .then(res => {
        console.log(res)
        resolve(res);
      })
      .catch(err=>{reject(err)});
    })

    videoDetails
    .then(res => {
      console.log(res)
      const item = res.data.items[0];
      const {
        channelTitle,
        description,
        title
      } = item.snippet;
      this.setState({channelTitle: channelTitle, videoTitle: title, videoDesc: description});
    });

  }


  handleChangedVideoState(newVideoState) {
    console.log("NEW VIDEO STATE", newVideoState);
    this.setState({ youtubeVideoState: newVideoState });
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 mb-5">
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
                    <h3 className="cardTitle">{this.state.videoTitle}</h3>
                    <p className="card-text">{this.state.channelTitle}</p>
                    <p className="card-test">{this.state.videoDesc}</p>
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
