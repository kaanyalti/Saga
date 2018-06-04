import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../LandingPage/Home'
import Admin from "../CreatorDashboard/VideoOverview/Admin.jsx";
import GoogleSignIn from "./googleSignIn";


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const publicVideo = () => (
  <h1>Video viewable to public</h1>
  );

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={GoogleSignIn} />
      <Route path="/admin" component={Admin} />

    {/* TODO: ADD COMPONENTS FOR PUBLIC VIDEOS */}
      <Route path="/v/:video_id" component={publicVideo} />
    </Switch>
  </main>
)

export default Main
