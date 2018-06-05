// React and React Router
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"


// Navbar components
import Home from "../Public/Home";
import AdminRoute from "../../CreatorDashboard/AdminRoute.jsx";
import GoogleSignIn from "../Authentication/GoogleSignIn";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const publicVideo = () => <h1>Video viewable to public</h1>;


class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  MainStyle = {
    backgroundColor: "white"
  }

render() {
    console.log(this.props)
    return (
      <main style = {this.MainStyle}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={GoogleSignIn} />
          <Route path="/admin" render={(props) => (<AdminRoute loggedIn={this.props.loggedIn} />)} />
          {/* TODO: ADD COMPONENTS FOR PUBLIC VIDEOS */}
          <Route path="/v/:video_id" component={publicVideo}  />
        </Switch>
      </main>
    )}
  }
  
  export default Main;
  