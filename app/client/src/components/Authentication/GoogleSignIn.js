import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { SigninStyle } from "./SigninStyle";
import { Jumbotron } from "react-bootstrap";
import lottie from "lottie-web";

class googleSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIDs: []
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById("thumb"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: SigninStyle.FingerPrint
    });
  }
  responseGoogle(response) {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/channels?access_token=${
          response.accessToken
        }&part=snippet&mine=true`
      )
      .then(res => {
        const youtubeID = res.data.items[0].id;

        axios
          .get(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${youtubeID}&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo`
          )
          .then(res => {
            console.log("second call response: ");
            const uploadsID =
              res.data.items[0].contentDetails.relatedPlaylists.uploads;

            axios
              .get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsID}&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo`
              )
              .then(res => {
                const { videoIDs } = this.state;
                // TODO: Map through the data.items array to get ALL UPLOADS
                const videoID = res.data.items[0].snippet.resourceId.videoId;
                this.setState({ videoIDs: [...videoIDs, videoID] });
                console.log(videoID);
              });
            console.log(uploadsID);
          });
        console.log(youtubeID);
      });
  }

  render() {
    return (
      <div className="background" style={SigninStyle.Style}>
        <Jumbotron style={SigninStyle.JumbotronStyle}>
          <div id="thumb" style={SigninStyle.ImageStyle} />
          <GoogleLogin
            clientId="123160637177-2spplv6itvp1p3ue1cr06t4e2btd7v4e.apps.googleusercontent.com"
            buttonText="Login"
            scope="https://www.googleapis.com/auth/youtube.readonly"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            style={SigninStyle.LoginStyle}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default googleSignIn;
