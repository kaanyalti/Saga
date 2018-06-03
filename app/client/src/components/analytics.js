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

  render() {
    return (
      <div id="chartContainer">
      </div>
    );
  }
}

export default EmotionsChart;
