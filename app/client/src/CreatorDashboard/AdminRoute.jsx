import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import videoIDs from "../fakeYouTubeRes.js";
import VideoDetail from "./VideoOverview/VideoDetail";
import VideoList from "./VideoOverview/VideoList";

// The VideoList component matches one of two different routes
// depending on the full pathname

const VideosAll = () => <h1>VideosAll</h1>;

class AdminRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route
          exact
          path="/admin"
          render={() =>
            this.props.loggedIn ? (
              <VideoList videoData={this.props.videoData} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route exact path="/admin/videos" component={VideosAll} />
        <Route
          path="/admin/videos/:video_id"
          render={() => <VideoDetail videoData={this.props.videoData} />}
        />
      </Switch>
    );
  }
}

export default AdminRoute;
