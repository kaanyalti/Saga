import React from "react";

class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
    this.downloadApi = this.downloadApi.bind(this);
  }


  downloadApi(){
    const tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  onPlayerReady(event) {
    console.log("player is ready");
  }

  onPlayerStateChange(event) {
    switch (event.data) {
      case window.YT.PlayerState.ENDED:
        this.props.handleChangedVideoState("ended");
        break;
      case window.YT.PlayerState.PLAYING:
        this.props.handleChangedVideoState("playing");
        break;
      case window.YT.PlayerState.PAUSED:
        this.props.handleChangedVideoState("paused");
        break;
      case window.YT.PlayerState.BUFFERING:
        this.props.handleChangedVideoState("buffering");
        break;
      case window.YT.PlayerState.CUED:
        this.props.handleChangedVideoState("cued");
        break;
      default:
        console.log("default case");
    }
  }

  stopVideo() {
    this.state.player.stopVideo();
  }

  componentDidMount() {
    this.downloadApi();
    window.onYoutubeIframeAPIReady = (event) => {
      const player = new window.YT.Player(this.anchor, {
        height: this.props.height || "390",
        width: this.props.width || "640",
        videoId: this.props.youtubeVideoID,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
      this.setState({ player: player });
    }
  }

  render() {
    return (
      <div
        ref={r => {
          this.anchor = r;
        }}
      />
    );
  }
}

export default VideoComponent;
