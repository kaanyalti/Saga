import React from "react";
import axios from "axios";
import * as Kairos from "../../modules/kairosMethods";
import { apiKeys } from "../../env.js";


class ZiggeoJSRecorder extends React.Component{
  constructor(props){
    super(props);
    this.recorderRef = React.createRef();
    this.recorder = null;
  }

  componentDidMount() {
    const recorderNode = this.recorderRef.current;
    this.recorder = new window.ZiggeoApi.V2.Recorder({
      element: recorderNode,
      attrs: {
        width: this.props.width || 320,
        height: this.props.height || 240,
        theme: "modern",
        themecolor: "red",
        countdown: 0,
        skipinitial: true,
        application: apiKeys.ziggeoApplicationToken
      }
    });
    this.recorder.activate();
    this.recorder.record();
  };




  render() {
    return(
      <div ref={this.recorderRef}></div>
    )
  }


}


export default ZiggeoJSRecorder;