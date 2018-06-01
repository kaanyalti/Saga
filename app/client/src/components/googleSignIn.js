import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";

class googleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    console.log(response);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/channels?access_token=${
          response.accessToken
        }&part=snippet&mine=true`
      )
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <GoogleLogin
        clientId="123160637177-2spplv6itvp1p3ue1cr06t4e2btd7v4e.apps.googleusercontent.com"
        buttonText="Login"
        scope="https://www.googleapis.com/auth/youtube.readonly"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
    );
  }
}

export default googleSignIn;
