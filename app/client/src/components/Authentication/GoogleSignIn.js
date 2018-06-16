import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import { SigninStyle } from "./SigninStyle";
import lottie from "lottie-web";
import { Container, Row, Col, Button } from "reactstrap";

class googleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
      redirect: false
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setState({ redirect: true });
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
    lottie.setSpeed(2);
  }

  responseGoogle(response) {
    const { email, firstName } = response.profileObj;
    const data = { email: email, firstName: firstName };

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/channels?access_token=${
          response.accessToken
        }&part=snippet&mine=true`
      )
      .then(res => {
        // Youtube ID of the person
        const youtubeID = res.data.items[0].id;

        axios
          //  Gets a playlist ID of uploads of a user
          .get(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${youtubeID}&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo`
          )
          .then(res => {
            // Gets ID of user's playlist called "Uploads"
            const uploadsID =
              res.data.items[0].contentDetails.relatedPlaylists.uploads;

            axios
              .get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsID}&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo`
              )
              .then(res => {
                // Getting YouTube video IDs in an array
                const videoData = res.data.items.map(item => {
                  return {
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title
                  };
                });

                const completeVideoData = [];

                // Returns a promise
                const videoPromises = videoData.map(video => {
                  return axios
                    .get(
                      `https://www.googleapis.com/youtube/v3/videos?id=${
                        video.id
                      }&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo&part=snippet,statistics`
                    )
                    .then(res => {
                      const item = res.data.items[0];
                      const {
                        channelTitle,
                        description,
                        publishedAt,
                        title,
                        thumbnails
                      } = item.snippet;

                      // Building complete video object
                      const additionalVideoData = {};
                      additionalVideoData.id = item.id;
                      additionalVideoData.title = title;
                      additionalVideoData.description = description;
                      additionalVideoData.channelTitle = channelTitle;
                      additionalVideoData.publishedAt = publishedAt;
                      additionalVideoData.statistics = item.statistics;
                      additionalVideoData.thumbnail = thumbnails.maxres;

                      // Pushes complete video data to array to set global state
                      completeVideoData.push(additionalVideoData);
                      console.log("In promise");
                    });
                });

                // Only sets global videoData once all API calls are complete
                Promise.all(videoPromises).then(res => {
                  // Adds YouTube IDs to current state
                  this.setState({ videoData: completeVideoData });
                  // Sets global state of videoData
                  data.videoData = this.state.videoData;
                  this.props.handleLogin(data);
                });

                // Posts user's video to server
                axios
                  .post("/api/users", {
                    videoData: videoData,
                    email: email
                  })
                  .then(res => {})
                  .catch(err => {
                    console.log(err);
                  });
              });
          });
      });
  }

  containerStyle = {
    backgroundColor: "#fcfcfc",
    marginTop: "5vh",
    height: "50vh",
    display: "flex",
    flexDirection: "column"
  };

  loginImg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1488926445368-4a98469fbe38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9d84d5e35f7496993138b4191281c20&auto=format&fit=crop&w=1050&q=80)",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    minHeight: "30vh"
  };

  buttonContainer = {
    minHeight: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  loginButtonStyle = {
    background: "none",
    border: "none"
  };

  render() {
    const { redirect } = this.state;
    return redirect ? (
      <Redirect to="/admin" />
    ) : (
      <Container style={this.containerStyle}>
        <Row>
          <Col style={this.loginImg}>
            <div id="thumb" style={SigninStyle.ImageStyle} />
          </Col>
        </Row>
        <Row style={{ display: "block" }}>
          <Col style={this.buttonContainer}>
            <GoogleLogin
              clientId="123160637177-2spplv6itvp1p3ue1cr06t4e2btd7v4e.apps.googleusercontent.com"
              buttonText=""
              scope="https://www.googleapis.com/auth/youtube.readonly"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              style={this.loginButtonStyle}
            >
              <button type="button" className="google-button">
                <span className="google-button__icon">
                  <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                      id="Shape"
                      fill="#EA4335"
                    />
                    <path
                      d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                      id="Shape"
                      fill="#FBBC05"
                    />
                    <path
                      d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                      id="Shape"
                      fill="#4285F4"
                    />
                    <path
                      d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                      fill="#34A853"
                    />
                  </svg>
                </span>
                <span className="google-button__text">Sign in with Google</span>
              </button>
            </GoogleLogin>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default googleSignIn;
