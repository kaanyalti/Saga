import React, { Component } from "react";
class EmotionsChart extends Component {
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };
  chartData = {
    object: {}
  };
  render() {
    return <div id="chartContainer" style={this.chartStyle} />;
  }
}

export default EmotionsChart;
