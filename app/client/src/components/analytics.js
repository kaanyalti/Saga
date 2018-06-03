import React, { Component } from "react";
import axios from "axios";
class EmotionsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      points: { x: this.props.x, y: this.props.y }
    };
  }
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };

  componentDidMount() {
    var recorder = new window.ZiggeoApi.V2.Recorder({
      element: document.getElementById("replace_me-v2_recorder"),
      attrs: {
        width: 320,
        height: 240,
        theme: "modern",
        themecolor: "red"
      }
    });

    recorder.activate();

    console.log("Zigeo: ", window.ZiggeoApi.Videos.source("videotoken"));

    let title = this.state.title;

    let chart = new window.CanvasJS.Chart("chartContainer", {
      //you will need one per form

      title: { text: title },
      data: [
        {
          type: "stackedArea", //or stackedColumn
          dataPoints: []
        }
      ]
    });
    axios.get("/api/").then(res => {
      res.data.forEach(result => {
        chart.options.data[0].dataPoints.push({ x: result.id, y: result.id });
        chart.render();
      });
    });
  }
  render() {
    return (
      <div>
        <div id="chartContainer" style={this.chartStyle} />
        <div id="replace_me-v2_recorder" />
      </div>
    );
  }
}

export default EmotionsChart;
