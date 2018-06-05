import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

class googleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIDs: [],
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    console.log(response);

    const email = response.profileObj.email;
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
            const uploadsID =
              res.data.items[0].contentDetails.relatedPlaylists.uploads

            axios
              .get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsID}&key=AIzaSyDoCKnePcvI1twBioDPAcLHSNv9_YVCLOo`
              )
              .then(res => {
                console.log(`GOING TO GET VIDEO IDs`);
                console.log(res.data.items);
                const videoIDs = res.data.items.map(item => item.snippet.resourceId.videoId);
                this.setState(prevState => {
                  return { videoIDs: [...prevState.videoIDs, ...videoIDs] };
                });
                console.log(this.state.videoIDs);
                axios.post('/api/users', {
                  videoIDs: videoIDs,
                  email: email
                })
                .then(res => {
                  console.log(res);
                })
                .catch(err => {
                  console.log(err);
                });
              })
            console.log(uploadsID);
          })
        console.log(youtubeID);
      })
  }

  render() {
    const videoSrc = `https://www.youtube.com/embed/${this.state.videoIDs[0]}`;
    return (
      <div>
        <GoogleLogin
          clientId="123160637177-2spplv6itvp1p3ue1cr06t4e2btd7v4e.apps.googleusercontent.com"
          buttonText="Login"
          scope="https://www.googleapis.com/auth/youtube.readonly"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
}

export default googleSignIn
