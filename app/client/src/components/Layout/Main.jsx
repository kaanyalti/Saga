// React and React Router
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Navbar components
import Home from "../Public/Home";
import AdminRoute from "../../CreatorDashboard/AdminRoute.jsx";
import GoogleSignIn from "../Authentication/GoogleSignIn";

// Public videos
import PublicVideo from "../Public/PublicVideo";
import VideoComponent from "../../CreatorDashboard/VideoOverview/VideoComponent.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  mainStyle = {
    width: "100%",
    zIndex: "90"
  };

  render() {
    return (
      <main id="content" style={this.mainStyle}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home setCurrentPage={this.props.setCurrentPage} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <GoogleSignIn
                handleLogin={this.props.handleLogin}
                setCurrentPage={this.props.setCurrentPage}
              />
            )}
          />
          <Route
            path="/admin"
            render={props => (
              <AdminRoute
                loggedIn={this.props.loggedIn}
                videoData={this.props.videoData}
                setCurrentPage={this.props.setCurrentPage}
              />
            )}
          />
          <Route path="/videos/:video_id" component={VideoComponent} />
          <Route
            exact path="/v/:video_id"
            render={props => (
                <PublicVideo videoData={this.props.videoData}{...props} />
              )}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
