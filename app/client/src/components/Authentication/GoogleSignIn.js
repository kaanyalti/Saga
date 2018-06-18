import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import { SigninStyle } from "./SigninStyle";
import lottie from "lottie-web";
import { Container, Row, Col } from "reactstrap";

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
    minHeight: "30vh"
  };

  buttonContainer = {
    minHeight: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  loginButtonStyle = {
    border: "none",
    width: "191px",
    height: "46px",
    backgroundPosition: "center"
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
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default googleSignIn;
