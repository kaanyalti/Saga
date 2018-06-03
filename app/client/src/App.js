import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import EmotionsChart from "./components/analytics";
import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

class App extends Component {
  getCoord() {
    let x = 45,
      y = 50;
    let coordinates = { x: x, y: y };
    return (coordinates = { x: x, y: y });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

           /* Link components are used for linking to other views */
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
         </nav>

          /* Route components are rendered if the path prop matches the current URL */
           <Route path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>

      </div>
    );
  }
}

export default App;

/*

  <div id="chartContainer" style={this.chartStyle} />
        <GoogleSignIn />
        <GoogleSignOut />
        <KairosTrigger />
        <EmotionsChart
          title="Title given by KairosTrigger component"
          x={this.getCoord().x}
          y={this.getCoord().y}
        />
        <ZiggeoRecorder />

*/