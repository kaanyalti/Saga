import React, { Component } from "react";
class Graph extends Component {
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
    let title = this.state.title;
    const chart = new window.CanvasJS.Chart("chartContainer", {
      title: { text: title },
      axisX: this.state.axisX,
      axisY :{
        includeZero: false,
        title: "Emotion meter"
      },
      toolTip: {
        shared: "true"
      },
      legend:{
        cursor:"pointer"
      },
      data: [
        {
          type: "spline",
          dataPoints: this.state.datapoints
        }
      ]
    });

    chart.render();
  }

  PopulateGraph () {
    if ( this.props.data.data){
    // console.log("Using nested loop to update Graph with the following:")
    // console.log("Reaction length (secs): ", this.props.data.data.headers["x-runtime"]);
    console.log("Reaction figures :", this.props.data.data.data[0].reactions);
    this.props.data.data.data[0].reactions.forEach(array => {
      array.forEach( object => {
        var time = object.time;
        console.log("Emotion group time stamp: ", time)
        object.people.forEach( nested => {
          console.log("labels and value to plug in graph: ", nested.emotions);
          
          for (let emotion in nested.emotions)
          console.log("single emotion and metric (time?): ", emotion, nested.emotions[emotion], time)
          this.setState({datapoints:[
            {
              type: "spline",
              visible: false,
              showInLegend: true,
              name: "emotion",
              dataPoints: [
                {label: time, y:nested.emotions.emotion}
              ]
            }
              ]
          })
console.log("state after update: ", this.state.datapoints)      })
      })
    })
  }
  }


  
  render() {
    this.PopulateGraph()
    // console.log("Graph props", this.props)
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default Graph;
