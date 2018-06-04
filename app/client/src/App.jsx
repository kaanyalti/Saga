import React, { Component } from "react";
// import KairosTrigger from "./components/kairosTrigger";
// import ZiggeoRecorder from "./components/ziggeoRecorder";
// import GoogleSignIn from "./components/googleSignIn";
// import GoogleSignOut from "./components/googleSignOut";
// import EmotionsChart from "./components/analytics";

import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

// import Video from "./CreatorDashboard/VideoOverview/Video.jsx";


/* Home component */
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// /* Login component */
// const Login = () => (
//   <div>
//     <h2>Login</h2>
//   </div>
// );

// /* Logout component */
// const Logout = () => (
//   <div>
//     <h2>Logout</h2>
//   </div>
// );

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
        <Main />
      </div>
    );
  }
}

export default App;

/*
 <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={VideoIndex} />


*/
