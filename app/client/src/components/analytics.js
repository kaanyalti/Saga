import React, { Component } from "react";
import axios from "axios";
import KairosTrigger from "./kairosTrigger";
class EmotionsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      x: this.props.x,
      y: this.props.y
    };
  }
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };

  componentDidMount() {
    let title = this.state.title;

    let chart = new window.CanvasJS.Chart("chartContainer", {
      title: { text: title },
      data: [
        {
          type: "stackedArea", //or stackedColumn
          dataPoints: []
        }
      ]
    });
    chart.render();
    axios.get("/api/").then(res => {
      let index = 0;
      res.data.forEach(result => {
        console.log("Axios call: ", chart.options.data[0].dataPoints);
        chart.options.data[0].dataPoints.push({ x: result.id, y: result.id });
      });
    });
  }
  render() {
    return <div id="chartContainer" style={this.chartStyle} />;
  }
}

export default EmotionsChart;
