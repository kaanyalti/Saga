import React, { Component } from "react";
import axios from "axios";
class EmotionsChart extends Component {
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };
  ChartData = () => {
    let object = "test";
    console.log("incoming data: ", object);
  };
  componentDidMount() {
    axios
      .get("http://localhost/api/home")
      .then(res => {
        console.log("response: ", res);
      })
      .catch(err => {
        console.log("Axios call: ", err);
      });
  }
  render() {
    return <div id="chartContainer" style={this.chartStyle} />;
  }
}

export default EmotionsChart;
