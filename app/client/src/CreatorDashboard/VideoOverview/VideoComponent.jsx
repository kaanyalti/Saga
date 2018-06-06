import React from "react";

class VideoComponent extends React.Component{
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
    event.target.playVideo();
  }

  onPlayerStateChange(event) {
    if(event.data == window.YT.PlayerState.PLAYING && !this.state.done){
      setTimeout(this.stopVideo, 6000);
      this.setState({done: true});
    }
  }

  stopVideo() {
    this.state.player.stopVideo();
  }

  componentDidMount(){
    let player = new window.YT.Player(this.anchor, {
      height: this.props.height || '390',
      width: this.props.widht || '640',
      videoId: this.props.videoId,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    })
    this.setState({player: player})
  }

  render() {
    return (
      <div ref={(r) => {this.anchor = r}}></div>
    )
  }

}


export default VideoComponent;
