import React from "react";

class HybridVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
    this.anchor = React.createRef();
    this.loadYT;
  }


  onPlayerReady(event) {
    console.log("player is ready");
  }

  onPlayerStateChange(event) {
    console.log("state change")
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
    if (!this.loadYT) {
      this.loadYT = new Promise(resolve => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }
    this.loadYT.then(YT => {
      this.player = new YT.Player('public-video', {
        // height: this.props.height || "360",
        // width: this.props.width || "640",
        // videoId: this.props.youtubeVideoID,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    });
  }


  render() {
    return (
      <iframe id="public-video"
              width="640" height="360"
              src={`https://www.youtube.com/embed/${
                    this.props.youtubeVideoID
                  }`}
              frameBorder="0"
      />
    );
  }
}

export default HybridVideoComponent;
