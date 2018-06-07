import React, { Component } from "react";
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      points: {joy: 1, sadness: 3, suprise: 5, disgust: 15}
    };
  }

  GraphStyle = {
    width: "25%",
    height: "120px",
    margin: "auto",
    marginTop: "15%"
  };

  PopulateGraph () {
    this.props.data.forEach(item => {
      console.log("graph loop", item)
    })
  }

  componentDidMount() {
    let title = this.state.title;
    let chart = new window.CanvasJS.Chart("chartContainer", {
      title: { text: title },
      data: [
        {
          type: "stackedArea",
          dataPoints: [this.state.points]
        }
      ]
    });

    chart.render();
  }
  render() {
    // console.log("Graph props", this.props)
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default Graph;
