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

const publicVideo = () => <h1>Video viewable to public</h1>;

class Main extends React.Component {
  constructor(props) {
    super(props);
    const MainStyle = {
      backgroundColor: "white",
      margin: "0 0 0 0"
    };
  }

  render() {
    return (
      <main style={this.MainStyle}>
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
      </main>
    );
  }
}

export default Main;
