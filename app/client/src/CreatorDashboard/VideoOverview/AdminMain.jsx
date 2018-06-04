import React from 'react'
import { Link } from 'react-router-dom'
import videoIDs from '../../fakeYouTubeRes.js'
// import Video from './Video'


// The AdminMain component matches one of two different routes
// depending on the full pathname
const AdminMain = () => (
  <div>
    <ul>
      {
        videoIDs.all().map(video => (
          <li key={video.id}>
            <Link to={`/admin/videos/${video.id}`}>{video.title}</Link>
            <iframe
              title={video.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
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
