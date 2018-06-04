/* global cookie */

import React from 'react'
import axios from 'axios'
import GoogleLogout from 'react-google-login'

class googleSignOut extends React.Component {
  constructor(props) {
    super(props)
    this.forceMyOwnLogout = this.forceMyOwnLogout.bind(this)
  }

  forceMyOwnLogout(response) {
    cookie.remove('MyGoogleID', { path: '/' })
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      if (auth2 != null) {
        auth2
          .signOut()
          .then(auth2.disconnect().then(this.props.onLogoutSuccess))
      }
    }
    this.forceUpdate()
  }

  render() {
    return (
      <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={this.forceMyOwnLogout}
      />
    )
  }
}

export default googleSignOut
