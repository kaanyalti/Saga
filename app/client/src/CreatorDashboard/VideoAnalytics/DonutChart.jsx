import React, { Component } from "react";

class DonutChart extends Component {
  constructor(props) {
    super(props);
  }

  // Must use componentDidUpdate() since initial props of VideoDetail = null
  componentDidUpdate() {
    console.log("Props in component did update", this.props);
    // Uses youtubeVideoID to find title in videoData array
    if (this.props.videoData) {
      const title = this.props.videoData.find(
        video => video.id === this.props.youtubeVideoID
      ).title;
      const dataPoints = this.generateDataPoints();
      const chart = new window.CanvasJS.Chart("chartContainer-donut", {
        title: {
          text: `Overall reactions for ${title}`,
          fontFamily: "Lato"
        },
        data: [
          {
            indexLabelFontFamily: "Lato",
            type: "doughnut",
            dataPoints: dataPoints
          }
        ]
      });
      chart.render();
    }
  }

  getEmotionScores() {
    const { data } = this.props || []

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
    const total = this.getTotal(averageReactions);

    const dataPoints = [];
    for (const emotion in averageReactions) {
      const averageScore = this.getSum(averageReactions[emotion]);
      const percentage = averageScore / total * 100;

      const twoSigFigs = this.twoSigFigs(percentage);

      if (averageScore > 0) {
        dataPoints.push({
          y: twoSigFigs,
          indexLabel: `${this.capitaliseString(emotion)} (${twoSigFigs}%)`
        });
      }
    }
    return dataPoints;
  }

  getTotal(averageReactions) {
    const allReactionScores = [];

    for (const reaction in averageReactions) {
      allReactionScores.push(...averageReactions[reaction]);
    }
    return allReactionScores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  twoSigFigs(number) {
    return parseFloat(Math.round(number * 100) / 100).toFixed(2);
  }

  capitaliseString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // emotionScores is an array of emotion scores of the same type (e.g. disgust)
  getSum(emotionScores) {
    return emotionScores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  render() {
    return (
      <div id="chartContainer-donut"/>
    )
  }
}

export default DonutChart;
// comment
