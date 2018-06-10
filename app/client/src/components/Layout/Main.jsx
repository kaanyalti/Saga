// React and React Router
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

// Navbar components
import Home from "../Public/Home";
import AdminRoute from "../../CreatorDashboard/AdminRoute.jsx";
import GoogleSignIn from "../Authentication/GoogleSignIn";

// Public videos
import PublicVideo from "../Public/PublicVideo";
import VideoComponent from "../../CreatorDashboard/VideoOverview/VideoComponent.jsx";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active")
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={props => (
              <GoogleSignIn handleLogin={this.props.handleLogin} />
            )}
          />
          <Route
            path="/admin"
            render={props => (
              <AdminRoute
                loggedIn={this.props.loggedIn}
                videoData={this.props.videoData}
              />
            )}
          />
          <Route path="/videos/:video_id" component={VideoComponent} />
          <Route path="/v/:video_id" component={PublicVideo} />
        </Switch>
        <button
          type="button"
          class="btn btn-info navbar-btn"
          onClick={this.toggleSidebar.bind(this)}
        >
          <span>Toggle Sidebar</span>
        </button>
      </main>
    );
  }
}

export default Main;
