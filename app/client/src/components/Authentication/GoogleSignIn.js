import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { SigninStyle } from "./SigninStyle";
import { Jumbotron } from "react-bootstrap";

class googleSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIDs: []
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  // style ={
  //   background: "#D7ECEF",
  //   height: "90%",
  //   width: "100%",
  //   position: "absolute"
  // }

  // ContainerStyle = {
  //   margin: "auto",
  //   width: "60%",
  //   height: "200px"
  // }

  // JumbotronStyle = {
  //   lineHeight: "3",
  //   textAlign: "center",
  //   color: "red",
  //   fontSize: "3em",
  //   margin: "auto",
  //   height: "60%",
  //   paddingTop: "0px",
  //   paddingBottom: "0px",
  //   width: "60%",
  //   marginTop: "10%",
  //   backgroundColor: "white"
  // }

  // ImageStyle = {
  //   margin: "auto",
  //   width: "100%",
  //   height: "50%",
  //   objectFit: "cover"
  // }

  // LoginStyle = {
  //   backgroundColor: "white",
  //   color: "red",
  //   width: "40%",
  //   margin: "auto",
  //   height: "15%"
  // }
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
          <img
            style={SigninStyle.ImageStyle}
            src="https://images.unsplash.com/photo-1506585345028-d9d1525ecb21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b472feb6fb5a1ff6e911a4401db7baab&auto=format&fit=crop&w=1950&q=80"
          />
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
