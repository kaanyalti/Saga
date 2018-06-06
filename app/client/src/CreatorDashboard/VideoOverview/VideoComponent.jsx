import React from "react";

class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      done: false
    };
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  }

  onPlayerReady(event) {
    console.log("player is ready");
  }

  onPlayerStateChange(event) {
    switch (event.data) {
      case window.YT.PlayerState.ENDED:
        console.log("video ended");
        break;
      case window.YT.PlayerState.PLAYING:
        console.log("video is playing");
        break;
      case window.YT.PlayerState.PAUSED:
        console.log("video is paused");
        break;
      case window.YT.PlayerState.BUFFERING:
        console.log("buffering");
        break;
      case window.YT.PlayerState.CUED:
        console.log("video is cued");
        break;
      default:
        console.log("default");
    }
  }

  stopVideo() {
    this.state.player.stopVideo();
  }

  componentDidMount() {
    let player = new window.YT.Player(this.anchor, {
      height: this.props.height || "390",
      width: this.props.widht || "640",
      videoId: this.props.videoId,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      }
    });
    this.setState({ player: player });
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
