import React from "react";
import axios from "axios";
import * as Kairos from "../../modules/kairosMethods";
import { apiKeys } from "../../env.js";

class ZiggeoRecorder extends React.Component {
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
    console.log(this.props.youtubeVideoState);
    switch(this.props.youtubeVideoState){
      case "playing":
        console.log("ZIGGEO SHOULD RECORD")
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
    console.log("GOT THE RECORDER ELEMENT", this.recorderElement);
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
        ref = {this.ref}
      >
        {" "}
      </ziggeorecorder>
    );
  }
}

export default ZiggeoRecorder;
