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
            console.log("second call response: ");
            const uploadsID =
              res.data.items[0].contentDetails.relatedPlaylists.uploads;

            axios
              .get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsID}&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo`
              )
              .then(res => {
                console.log(`GOING TO GET VIDEO IDs`);
                console.log(res.data.items);
                const videoData = res.data.items.map(item => {
                  return {
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title
                  };
                });
                this.setState(prevState => {
                  return { videoData: [...prevState.videoData, ...videoData] };
                });

                data.videoData = this.state.videoData;

                this.props.handleLogin(data);

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
    height: "50vh"
  };

  loginImg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1488926445368-4a98469fbe38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9d84d5e35f7496993138b4191281c20&auto=format&fit=crop&w=1050&q=80)",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    height: "30vh"
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
        <Row>
          <Col><GoogleLogin
            clientId="123160637177-2spplv6itvp1p3ue1cr06t4e2btd7v4e.apps.googleusercontent.com"
            buttonText="Login"
            scope="https://www.googleapis.com/auth/youtube.readonly"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          /></Col>
        </Row>
      </Container>
    );
  }
}



export default googleSignIn;
