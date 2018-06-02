import React, { Component } from "react";
import axios from "axios";
import canvasjs from "canvasjs";
class EmotionsChart extends Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title, text: props.text };
  }
  chartStyle = {
    height: "180px",
    width: "30%",
    margin: "auto"
  };

  componentDidMount() {
    window.onload = function() {
      var chart = new canvasjs.Chart("chartContainer", {
        title: {
          text: "A Stacked Area Chart"
        },
        data: [
          {
            type: "stackedArea", //or stackedColumn
            dataPoints: [
              { x: 10, y: 171 },
              { x: 20, y: 155 },
              { x: 30, y: 150 },
              { x: 40, y: 165 },
              { x: 50, y: 195 },
              { x: 60, y: 168 },
              { x: 70, y: 128 },
              { x: 80, y: 134 },
              { x: 90, y: 114 }
            ]
          },
          {
            type: "stackedArea", //or stackedColumn
            dataPoints: [
              { x: 10, y: 101 },
              { x: 20, y: 105 },
              { x: 30, y: 100 },
              { x: 40, y: 105 },
              { x: 50, y: 105 },
              { x: 60, y: 108 },
              { x: 70, y: 108 },
              { x: 80, y: 104 },
              { x: 90, y: 104 }
            ]
          }
        ]
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
