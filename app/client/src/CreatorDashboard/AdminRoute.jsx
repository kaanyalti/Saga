import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoList from "./VideoOverview/VideoList";
import VideoDetail from "./VideoOverview/VideoDetail";

// The VideoList component matches one of two different routes
// depending on the full pathname
class AdminRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/admin"
            render={() =>
              this.props.loggedIn ? (
                <VideoList
                  videoData={this.props.videoData}
                  setCurrentPage={this.props.setCurrentPage}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/admin/videos/:video_id"
            // Pass props to render to receive :video_id prop
            render={props => (
              <VideoDetail
                videoData={this.props.videoData}
                {...props}
                setCurrentPage={this.props.setCurrentPage}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default AdminRoute;
