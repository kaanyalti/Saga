import React, { Component } from "react";
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      points: []
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
      data: [
        {
          type: "stackedArea",
          dataPoints: this.state.points
        }
      ]
    });

    chart.render();
  }

  PopulateGraph () {
    console.log("Using 3 layered loop to update Graph:", this.props.data)
    if ( this.props.data){
    this.props.data.data.forEach(item => {
      item.forEach( object => {
        object[0].people.forEach( person => {
          console.log(person.emotions);
           
      })
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
