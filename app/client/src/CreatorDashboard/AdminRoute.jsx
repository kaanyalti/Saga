import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoList from "./VideoOverview/VideoList";
import VideoDetail from "./VideoOverview/VideoDetail";
import Sidebar from "../components/Layout/Sidebar.jsx";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

// The VideoList component matches one of two different routes
// depending on the full pathname

const VideosAll = () => <h1>VideosAll</h1>;

class AdminRoute extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("video props",this.props);
    return (
      <div>
      <Sidebar />
      <Switch> 
        
              <Route
                exact
                path="/admin"
                render={() =>
                  this.props.loggedIn? (
                    <VideoList videoData={this.props.videoData} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route exact path="/admin/videos" component={VideosAll} />
              <Route path="/admin/videos/:video_id" component={VideoDetail} />
      </Switch>
      </div>
    );
  }
}

export default AdminRoute;
