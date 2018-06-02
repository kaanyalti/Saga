import React, { Component } from "react";
import axios from "axios";
class EmotionsChart extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };

  componentDidMount() {
    window.onload = function() {
      var chart = new window.CanvasJS.Chart("chartContainer", {
        title: this.state.title,
        data: []
      });

      chart.render();
    };
    console.log("Props: ", this.props);
    axios
      .get("/api/")
      .then(res => {
        console.log("response: ", res.data);
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
