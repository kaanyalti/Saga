import React from "react";
import * as Kairos from "../../modules/kairosMethods";
import { apiKeys } from "../../env.js";

class RecorderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoToken: ""
    };
    this.embedding = new window.ZiggeoApi.V2.Application({
      token: apiKeys.ziggeoApplicationToken
    });
    this.ref = React.createRef();
    this.recorderElement = null;
    this.node = null;
  }

  componentDidUpdate(){
    switch(this.props.youtubeVideoState){
      case "playing":
        this.recorderElement.record();
    }
  }


  componentDidMount() {
    const recorder = this;
    const youtubeVideoID = this.props.youtubeVideoID;
    this.embedding.embed_events.on("processed", function(data) {
      const cacheData = data.application.videos.__cache;
      const cacheKey = Object.keys(cacheData)[0];
      const videoToken = cacheKey;
      if (!recorder.state.videoToken) {
        Kairos.uploadKairos(videoToken, youtubeVideoID);
        recorder.setState(() => {
          return { videoToken: videoToken };
        });
      }
    });
    this.node = this.ref.current;
    this.recorderElement = window.ZiggeoApi.V2.Recorder.findByElement(this.node);
    debugger;
  }

  render() {
    return (
      <ziggeorecorder
        ziggeo-width="320"
        ziggeo-height="240"
        ziggeo-theme="modern"
        ziggeo-themecolor="red"
        ziggeo-countdown="0"
        ziggeo-skipinitial="true"
      >
        {" "}
      </ziggeorecorder>
    );
  }
}

export default RecorderComponent;
