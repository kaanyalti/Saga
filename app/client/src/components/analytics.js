import React, { Component } from 'react'
import axios from 'axios'
class EmotionsChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      points: { x: this.props.x, y: this.props.y },
    }
  }

  componentDidMount() {
    let title = this.state.title
    let chart = new window.CanvasJS.Chart('chartContainer', {
      title: { text: title },
      data: [
        {
          type: 'stackedArea',
          dataPoints: [],
        },
      ],
    })

    chart.render()
  }
  render() {
    return <div id="chartContainer" />
  }
}

export default EmotionsChart
