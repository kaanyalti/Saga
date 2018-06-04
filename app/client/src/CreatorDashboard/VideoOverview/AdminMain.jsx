import React from 'react'
import { Link } from 'react-router-dom'
import videoIDs from '../../fakeYouTubeRes.js'
import Video from './Video'


// The AdminMain component matches one of two different routes
// depending on the full pathname
const AdminMain = () => (
  <div>
    <ul>
      {
        videoIDs.all().map(v => (
          <li key={v.id}>
            <Link to={`/admin/videos/${v.id}`}>{v.title}</Link>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${v.id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </li>
        ))
      }
    </ul>
  </div>
)


export default AdminMain
