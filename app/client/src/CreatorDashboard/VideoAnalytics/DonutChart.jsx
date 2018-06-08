import React, { Component } from "react";

class DonutChart extends Component {
  constructor(props) {
    super(props);
  }

  GraphStyle = {};

  // Must use componentDidUpdate() since initial props of VideoDetail = null
  componentDidUpdate() {
    const { title } = this.props;
    const dataPoints = this.generateDataPoints();
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

  getEmotionScores() {
    // data is an array
    const { data } = this.props;

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
      return averageReactions;
  }

  generateDataPoints() {
    const averageReactions = this.getEmotionScores();
    console.log(averageReactions);
    const dataPoints = [];
    for (const emotion in averageReactions) {
      const averageScore = this.getAverage(averageReactions[emotion]);
      if (averageScore > 0){
        dataPoints.push({ y: averageScore, indexLabel: emotion });
      }
    }
    return dataPoints;
  }

  // emotionScores is an array of emotion scores of the same type (e.g. disgust)
  getAverage(emotionScores) {
    return (
      emotionScores.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      , 0) / emotionScores.length
    );
  }

  render() {
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default DonutChart;
