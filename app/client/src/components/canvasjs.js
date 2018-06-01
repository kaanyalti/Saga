import CanvasJS from "canvasjs";
import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount() {
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "A Stacked Area Chart"
      },
      data: [
        {
          type: "stackedArea", //or stackedColumn
          dataPoints: [
            { x: 10, y: 171 },
            { x: 20, y: 155 },
            { x: 30, y: 150 },
            { x: 40, y: 165 },
            { x: 50, y: 195 },
            { x: 60, y: 168 },
            { x: 70, y: 128 },
            { x: 80, y: 134 },
            { x: 90, y: 114 }
          ]
        },
        {
          type: "stackedArea", //or stackedColumn
          dataPoints: [
            { x: 10, y: 101 },
            { x: 20, y: 105 },
            { x: 30, y: 100 },
            { x: 40, y: 105 },
            { x: 50, y: 105 },
            { x: 60, y: 108 },
            { x: 70, y: 108 },
            { x: 80, y: 104 },
            { x: 90, y: 104 }
          ]
        }
      ]
    });

    chart.render();
  }

  render() {
    return;
    console.log(this.chart);
  }
}

export default Canvas;


app.jsimport React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EmotionsChart from "./components/analytics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Chart below can be edited by handling events in the form creation
          srcipt
        </p>
        <EmotionsChart />
      </div>
    );
  }
}

export default App;
