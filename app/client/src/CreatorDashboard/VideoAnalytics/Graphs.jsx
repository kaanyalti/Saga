import React, { Component } from "react";
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      points: { x: this.props.x, y: this.props.y }
    };
  }

  GraphStyle = {
    width: "25%",
    height: "120px",
    margin: "auto",
    marginTop: "15%"
  };

  componentDidMount() {
    let title = this.state.title;
    let chart = new window.CanvasJS.Chart("chartContainer", {
      title: { text: title },
      data: [
        {
          type: "stackedArea",
          dataPoints: []
        }
      ]
    });

    chart.render();
  }
  render() {
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default Graph;
