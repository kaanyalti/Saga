import React, { Component } from "react";
class Graph extends Component {
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
  
  UpdateState = [{type: "spline",
  visible: true,
  showInLegend: true,
  name: "joy",
  dataPoints: []
},
{type: "spline",
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
      theme:"light",
	    animationEnabled: true,
      title: { text: "Emotions over time" },
      axisX: this.state.axisX,
      axisY :this.state.axisY,

      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer"
      },
      data:this.UpdateState
    });
    // console.log("did update props: ", this.props)
    console.log("did update updateState", this.UpdateState)
    this.PopulateGraph()

    chart.render();

  }
  

  PopulateGraph () {
    if ( this.props.data.data){

      // console.log("Using nested loop to update Graph with the following:")
      // console.log("Reaction figures :", this.props.data.data.data[0].reactions);

      this.props.data.data.data[0].reactions.forEach(array => {
        array.forEach(object => {
          var time = object.time;
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
      }
      // this.setState({data: this.UpdateState})
    }
    
    // style={this.GraphStyle}
    
    render() {
      console.log( "Update State: ", this.UpdateState)
      return <div id="chartContainer"  />;

    }
    console.log("test");
  }

  render() {
    this.PopulateGraph();
    console.log("test", this.arrayMod);
    return <div id="chartContainer" style={this.GraphStyle} />;
  }
}

export default Graph;
