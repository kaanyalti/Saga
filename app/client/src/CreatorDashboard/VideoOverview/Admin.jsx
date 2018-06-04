import React from 'react'
import { Switch, Route } from 'react-router-dom'
import videoIDs from '../../fakeYouTubeRes.js'
import Video from './Video'
import AdminMain from './AdminMain'


// The AdminMain component matches one of two different routes
// depending on the full pathname

const VideosAll = () => (<h1>VideosAll</h1>)
const Admin = () => (
  <Switch>
    <Route exact path='/admin' component={AdminMain}/>
    <Route path='/admin/videos' component={VideosAll}/>
    <Route path='/admin/videos/:video_id' component={Video}/>
  </Switch>
)


export default Admin
