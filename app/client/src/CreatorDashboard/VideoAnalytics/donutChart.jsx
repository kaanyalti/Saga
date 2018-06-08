import React, { Component } from "react";

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      datapoints: [],
      axisX:{
        title: "Time (ms)",
        tickLength: 10,
        minimum: 0,
        maximum: 5000,
      },
    };
  }

  GraphStyle = {
    width: "25%",
    height: "120px",
    margin: "auto",
    marginTop: "15%"
  };

  componentDidMount() {
    const {title} = this.state;
    const chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: title
      },
      data: [
      {
       type: "doughnut",
       dataPoints: [
       {  y: 53.37, indexLabel: "Android" },
       {  y: 35.0, indexLabel: "Apple iOS" },
       {  y: 7, indexLabel: "Blackberry" },
       {  y: 2, indexLabel: "Windows Phone" },
       {  y: 5, indexLabel: "Others" }
       ]
     }
     ]
   });

    chart.render();
  }

  populateDonutChart() {
    const data = this.props.data

    // Verifies if video has reactions
    if(data) {
      // Loops through impressions of each person (in the event that there is > 1)
      data.average_reactions.impressions.map
    }
  }

  // emotionScores is an array of emotion scores of the same type (e.g. disgust)
  getAverage(emotionScores) {
    return (emotionScores.reduce((accumulator, currentValue) => accumulator + currentValue))/emotionScores.length
  }

  parseAverageReaction() {

  }



    render() {
      return <div id="chartContainer" style={this.GraphStyle} />;
    }
  }

  export default Graph;
