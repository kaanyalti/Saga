import React, { Component } from "react";
class SplineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],//every object below is a single spline for its emotion
      axisX:{
        title: "Time (seconds)",
      },
      axisY: {
        title: "Score"
      }
    };
  }

  UpdateState = [
    {type: "spline",
    markerType: "none",
    visible: true,
    showInLegend: true,
    name: "joy",
    dataPoints: []
  },
  {type: "spline",
    markerType: "none",
    visible: true,
    showInLegend: true,
    name: "fear",
    dataPoints: []
  },
  {type: "spline",
    visible: true,
    showInLegend: true,
    name: "anger",
    dataPoints: []
  },
  {type: "spline",
    markerType: "none",
    visible: true,
    showInLegend: true,
    name: "disgust",
    dataPoints: []
  }]
    GraphStyle = {
      width: "100%",
      margin: "auto",
      marginTop: "15%"
  };

  componentDidUpdate() {
    const chart = new window.CanvasJS.Chart("chartContainer", {
      theme:"light3",
      animationEnabled: true,
      animationDuration: 5000,
      title: { text: "Emotions over time" },
      axisX: this.state.axisX,
      axisY :this.state.axisY,
      toolTip: {
        shared: "true"
      },
      interactivityEnabled: "true",
      zoomEnabled:true,
      markerType: "none",
      legend:{
        cursor:"pointer",
        itemclick : toggleDataSeries
      },
      legend:{
        cursor:"pointer"
      },
      data:this.UpdateState
    });

    function toggleDataSeries(e) {
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    };
    // console.log("did update props: ", this.props)
    console.log("did update updateState", this.UpdateState)
    this.PopulateGraph()
    chart.render();

  }


  PopulateGraph () {
    console.log("incoming props ", this.props.data.data)//All reactions videos array

    this.props.data.data.forEach(recording => {
    // if ( this.props.data.data[0]){
      // console.log("Using nested loop to update Graph with the following:")
      // console.log("Reaction figures :", this.props);

      recording.reactions.forEach(array => {
        console.log("recording/reactions/array var: ", array)
        array.forEach( object => {
          var time = object.time / 1000;
          // console.log("Emotion group time stamp: ", time);

          object.people.forEach( nested => {
            // console.log("labels and value to plug in graph: ", nested.emotions);

            for (let emotion in nested.emotions){
              if (nested.emotions[emotion] > 0) {
              // console.log("single emotion and time: ", emotion, nested.emotions[emotion], time);

              for ( let entry of this.UpdateState){
                // console.log("this.state.data array loop: ", entry);
                if (entry.name === emotion)
                  // console.log("Single emotion name matched this object from the state : ", this.state.data[this.state.data.indexOf(entry)])
                  // console.log("stuff to push: ", nested.emotions);

                  this.UpdateState[this.UpdateState.indexOf(entry)].dataPoints.push(
                    {label: time, y:nested.emotions[emotion]}
                  )//end of array.push method
                }//end of state loop
              }//end of if statement
            }
            })
          })
        })
      // }
    })
    }

    // style={this.GraphStyle}

    render() {
      console.log( "Update State: ", this.UpdateState)
      return <div id="chartContainer"  />;
    }
  }

  export default SplineChart;
