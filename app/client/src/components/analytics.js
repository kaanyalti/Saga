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
      console.log("Chart (analytics) component props: ", this.props);
      res.data.forEach(result => {
        chart.options.data[0].dataPoints.push({
          x: this.props.x,
          y: this.props.y
        });
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
