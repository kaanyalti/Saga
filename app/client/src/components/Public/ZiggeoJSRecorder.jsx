import React from "react";
import axios from "axios";
import * as Kairos from "../../modules/kairosMethods";
import { apiKeys } from "../../env.js";

class ZiggeoJSRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.recorderRef = React.createRef();
    this.recorder = null;
    this.embedding = new window.ZiggeoApi.V2.Application({
      token: apiKeys.ziggeoApplicationToken
    });
    this.processedCount = 0;
  }

  componentDidUpdate() {
    switch (this.props.youtubeVideoState) {
      case "playing":
        console.log("Should Start Recording Now");
        this.recorder.record();
        break;
      case "ended":
        console.log("Should Stop Recording Now");
        this.recorder.stop();
        break;
      case "paused":
        console.log("Video is paused, stop recording");
        this.recorder.stop();
        break;
      default:
        console.log("default");
    }
  }

  componentDidMount() {
    const recorderNode = this.recorderRef.current;
    this.recorder = new window.ZiggeoApi.V2.Recorder({
      element: recorderNode,
      attrs: {
        responsive: true,
        // width: this.props.width || 320,
        // height: this.props.height || 240,
        theme: this.props.theme || "modern",
        themecolor: this.props.temecolor || "red",
        countdown: 0,
        skipinitial: true,
        picksnapshots: false,
        application: apiKeys.ziggeoApplicationToken
      }
    });
    this.recorder.activate();
    this.embedding.embed_events.on("processed", data => {
      console.log("processed");
      const cacheData = data.application.videos.__cache;
      const cacheKey = Object.keys(cacheData)[0];
      const videoToken = cacheKey;
      if (this.processedCount === 0) {
        Kairos.uploadKairos(videoToken, this.props.youtubeVideoID);
        this.processedCount++;
      }
    });
  }

  componentWillUnmount(){
    this.recorder.destroy();
  }

  render() {
    return <div ref={this.recorderRef} />;
  }
}

export default ZiggeoJSRecorder;
