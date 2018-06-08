import React, { Component } from "react";

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datapoints: [],
      axisX: {
        title: "Time (ms)",
        tickLength: 10,
        minimum: 0,
        maximum: 5000
      }
    };
  }

  GraphStyle = {};

  //myArray.find(x => x.id === '45').foo;

  componentDidMount() {
    const { title } = this.props;
    const chart = new window.CanvasJS.Chart("chartContainer", {
      title: {
        text: title
      },
      data: [
        {
          type: "doughnut",
          dataPoints: [
            { y: 53.37, indexLabel: "Anger" },
            { y: 35.0, indexLabel: "Sadness" },
            { y: 7, indexLabel: "Fear" },
            { y: 2, indexLabel: "Disgust" },
            { y: 5, indexLabel: "Joy" },
            { y: 5, indexLabel: "Surprise" }
          ]
        }
      ]
    });

    chart.render();
  }

  generateDataPoints() {}

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
      return averageReactions;
    }
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
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default DonutChart;
