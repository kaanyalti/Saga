import React, { Component } from "react";
import "./App.css";
import KairosTrigger from "./components/kairosTrigger";
import ZiggeoRecorder from "./components/ziggeoRecorder";
import GoogleSignIn from "./components/googleSignIn";
import GoogleSignOut from "./components/googleSignOut";
import EmotionsChart from "./components/analytics";
import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Video from "./CreatorDashboard/VideoOverview/Video.jsx";
import VideoIndex from "./CreatorDashboard/VideoOverview/VideoIndex.jsx";

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* Login component */
const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
);

/* Logout component */
const Logout = () => (
  <div>
    <h2>Logout</h2>
  </div>
);

/* Dashboard component */
// const Dashboard = () => (
//   <div>
//     <h2>Dashboard</h2>
//   </div>
// );

class App extends Component {
  render() {
    return (
      <div>
        {/* DASHBOARD NAVBAR */}
        <Navbar />


        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={VideoIndex} />
      </div>
    );
  }
}

export default App;
