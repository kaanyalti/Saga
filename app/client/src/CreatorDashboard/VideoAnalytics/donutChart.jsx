import React, { Component } from "react";

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  GraphStyle = {};

  //myArray.find(x => x.id === '45').foo;
componentDidUpdate() {
  const { title } = this.props;
    const dataPoints = this.generateDataPoints()
    const chart = new window.CanvasJS.Chart("chartContainer", {
      title: {
        text: title
      },
      data: [
        {
          type: "doughnut",
          dataPoints: dataPoints
        }
      ]
    });

    chart.render();
}

  generateChart() {

  }

  getEmotionScores() {
    // data is an array
    const { data } = this.props;

    // Only gets emotion scores if available
    if (data) {
      const averageReactions = {
        anger: [],
        sadness: [],
        fear: [],
        disgust: [],
        joy: [],
        surprise: []
      };

      data.map(averageReaction => {
        averageReaction.average_reactions.impressions.map(averageEmotions => {
          for (const emotion in averageEmotions.average_emotion) {
            averageReactions[emotion].push(
              averageEmotions.average_emotion[emotion]
            );
          }
        });
      });
      console.log(averageReactions)
      return averageReactions;
    }
  }

  generateDataPoints() {
    debugger
    const averageReactions = this.getEmotionScores();
    console.log(averageReactions)
    const dataPoints = [];
    debugger
    for (const emotion in averageReactions) {
      debugger
      console.log(emotion)

      const averageScore = this.getAverage(averageReactions[emotion])
      debugger
      console.log(averageScore)
      dataPoints.push({y: averageScore, indexLabel: emotion})
    }
    debugger
    console.log(dataPoints)
    return dataPoints
  }

  // emotionScores is an array of emotion scores of the same type (e.g. disgust)
  getAverage(emotionScores) {
    return (
      emotionScores.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) / emotionScores.length
    );
  }

  // populateDonutChart() {
  //   const data = this.props.data

  //   // Verifies if video has reactions
  //   if(data) {
  //     // Loops through impressions of each person (in the event that there is > 1)
  //     data.average_reactions.impressions.map
  //   }
  // }

  render() {
    this.getEmotionScores();
    return (<div id="chartContainer" style={this.GraphStyle} />)
  }
}

export default DonutChart;
