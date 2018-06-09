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
    const total = this.getTotal(averageReactions)

    debugger

    const dataPoints = [];
    for (const emotion in averageReactions) {
      const averageScore = this.getAverage(averageReactions[emotion]);
      const percentage = (averageScore / total) * 100

      debugger

      if (averageScore > 0){
        dataPoints.push({ y: percentage, indexLabel: emotion });
      }
    }
    return dataPoints;
  }

  getTotal(averageReactions) {
    const allReactionScores = []

    debugger

    for (const reaction in averageReactions) {
      allReactionScores.push(...averageReactions[reaction])
    }
    return allReactionScores.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      , 0)
  }

  // emotionScores is an array of emotion scores of the same type (e.g. disgust)
  getAverage(emotionScores) {
    return (
      emotionScores.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      , 0)
    );
  }

  render() {
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default DonutChart;
