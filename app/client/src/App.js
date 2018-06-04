import React, { Component } from "react";
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

/* Login component */
const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)
import Navbar from "./components/NavBar.jsx";

// class App extends Component {
// import Component from './Dashboard/nameOfComponent.jsx'
//   render() {
//     return (
//       <Component />
//     )
//   }
// }
class App extends Component {
  render() {
    return (
      <div>
    {/* HOME NAVBAR */}
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
         </nav>

    {/* DASHBOARD NAVBAR */}

        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
         </nav>

           <Route exact path="/" component={Home}/>
           <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
