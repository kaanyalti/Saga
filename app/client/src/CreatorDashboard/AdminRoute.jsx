import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoIDs from "../fakeYouTubeRes.js";
import VideoList from "./VideoOverview/VideoList";
import VideoDetail from "./VideoOverview/VideoDetail";
import Sidebar from "../components/Layout/Sidebar.jsx";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"



// The VideoList component matches one of two different routes
// depending on the full pathname

const VideosAll = () => <h1>VideosAll</h1>;

class AdminRoute extends React.Component {
  constructor(props) {
    super(props);
  }

style = {
  backgroundColor: "white",
  color: "grey"
}
  
  render() {
    console.log(this.props);
    return (
      <Switch>
        <Grid>
          <Row>
            <Col>
              <Sidebar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Route
              exact
              path="/admin"
              render={() =>
                this.props.loggedIn ? <VideoList /> : <Redirect to="/login" />
              }
              />
              <Route exact path="/admin/videos" component={VideosAll} />
              <Route path="/admin/videos/:video_id" component={VideoDetail} />
            </Col>
          </Row>
        </Grid>
      </Switch>
    );
  }
}

export default AdminRoute;
