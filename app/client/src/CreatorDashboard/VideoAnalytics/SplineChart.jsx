import React, { Component } from "react";
import LoadingAnimation from "./LoadingAnimation";
// import { CSSTransition, transit } from "react-css-transition";

class SplineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [], //every object below is a single entry for its emotion
      axisX: {
        title: "Time (seconds)",
        minimum: "0"
      },
      
      axisY: {
        title: "Score",
        minimum: "0"
      },
      
    };
  }

  UpdateState = [
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "joy",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "fear",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "sadness",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "surprise",
      dataPoints: []
    },
    {
      type: "line",
      markerType: "circle",
      visible: true,
      showInLegend: true,
      name: "anger",
      dataPoints: []
    },
    {
      type: "line",
      color: "orange",
      markerType: "cricle",
      scatterSize: [],
      visible: true,
      showInLegend: true,
      name: "disgust",
      dataPoints: []
    }
  ];


  // GraphStyle = {
  //   width: "100%",
  //   margin: "auto",
  //   marginTop: "15%"
  // };

  componentWillUpdate(){
    this.setState({loading: false})
  }
  componentDidMount(){
  }


  componentDidUpdate() {
    // console.log("Props in component did update", this.props);
    const chart = new window.CanvasJS.Chart("chartContainer", {
      theme: "light3",
      animationEnabled: true,
      animationDuration: 2000,
      title: { text: "Emotions over time" },
      axisX: this.state.axisX,
      axisY: this.state.axisY,
      toolTip: {
        shared: "true"
      },
      interactivityEnabled: "true",
      zoomEnabled: true,
      legend: {
        cursor: "pointer",
        itemclick: function (e) {
            // console.log("legend click: " + e.dataPointIndex);
            // console.log(e);
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }
      },
      data: this.UpdateState
    });
    this.PopulateGraph();
    chart.render();
  }

  PopulateGraph() {
    console.log("props passed to graph ", this.props.data); //All reactions videos array
    if(this.props.data.data)
    this.props.data.data.forEach(recording => {
      recording.reactions.forEach(array => {
        array.forEach(object => {
          object.people.forEach(nested => {
          var time = object.time;
            for (let emotion in nested.emotions) {
              for (let entry of this.UpdateState) {
                if (entry.name === emotion)
                  this.UpdateState[
                  this.UpdateState.indexOf(entry)
                  ].dataPoints.push({
                    x: time/1000,
                    y: nested.emotions[emotion]
                  }); //end of array.push method
                  // time = 0;
              } //end of state loop
              // }//end of if statement
            }
          });
        });//array.forEach
      });
      // }
    });
  }

  
  render() {

    // console.log("Update State: ", this.UpdateState);
    if (this.state.loading === true){
      return ( 
        <div id="loading-charts">
      <h1> Updating Charts </h1>
      < LoadingAnimation />
      </div>
      )
    }
    return <div id="chartContainer" style={{widht: "100%"}}/>;

  }
}

export default SplineChart;