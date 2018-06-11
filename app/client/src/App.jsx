import React, { Component } from "react";
import Navigation from "./components/Layout/Navigation.jsx";
import Main from "./components/Layout/Main.jsx";
// import Moment from 'react-moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      userEmail: null,
      firstName: null,
      videoData: [
        {
          channelTitle: "Corrina Chow",
          description:
            "Morbi finibus vehicula enim, nec hendrerit ex pulvinar a. Vivamus in imperdiet augue, et condimentum lectus. Phasellus consectetur massa metus, a suscipit purus auctor id. Proin scelerisque interdum odio, eu mattis mi vulputate ut. Donec cursus felis eu egestas bibendum. Pellentesque in interdum augue, pretium dictum dolor. Duis dui nisi, tempus nec nisi eget, feugiat finibus turpis.",
          id: "Dr9C2oswZfA",
          publishedAt: "2018-06-05T20:29:22.000Z",
          statistics: {
            commentCount: "324793",
            dislikeCount: "3247",
            favoriteCount: "0",
            likeCount: "342",
            viewCount: "32897487324732"
          },
          thumbnail: {
            height: 720,
            url: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            width: 1280
          },
          title: "For Bigger Blazes"
        },
        {
          channelTitle: "Corrina Chow",
          description:
            "Morbi finibus vehicula enim, nec hendrerit ex pulvinar a. Vivamus in imperdiet augue, et condimentum lectus. Phasellus consectetur massa metus, a suscipit purus auctor id. Proin scelerisque interdum odio, eu mattis mi vulputate ut. Donec cursus felis eu egestas bibendum. Pellentesque in interdum augue, pretium dictum dolor. Duis dui nisi, tempus nec nisi eget, feugiat finibus turpis.",
          id: "Dr9C2oswZfA",
          publishedAt: "2018-06-05T20:29:22.000Z",
          statistics: {
            commentCount: "324793",
            dislikeCount: "3247",
            favoriteCount: "0",
            likeCount: "342",
            viewCount: "32897487324732"
          },
          thumbnail: {
            height: 720,
            url: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            width: 1280
          },
          title: "For Bigger Blazes"
        },
        {
          channelTitle: "Corrina Chow",
          description:
            "Morbi finibus vehicula enim, nec hendrerit ex pulvinar a. Vivamus in imperdiet augue, et condimentum lectus. Phasellus consectetur massa metus, a suscipit purus auctor id. Proin scelerisque interdum odio, eu mattis mi vulputate ut. Donec cursus felis eu egestas bibendum. Pellentesque in interdum augue, pretium dictum dolor. Duis dui nisi, tempus nec nisi eget, feugiat finibus turpis.",
          id: "Dr9C2oswZfA",
          publishedAt: "2018-06-05T20:29:22.000Z",
          statistics: {
            commentCount: "324793",
            dislikeCount: "3247",
            favoriteCount: "0",
            likeCount: "342",
            viewCount: "32897487324732"
          },
          thumbnail: {
            height: 720,
            url: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            width: 1280
          },
          title: "For Bigger Blazes"
        }
      ]
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    const { userEmail, firstName, loggedIn } = this.state;
    console.log("Client has logged in");
    this.setState({
      userEmail: data.email,
      firstName: data.firstName,
      loggedIn: true,
      videoData: data.videoData
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Navigation loggedIn={this.state.loggedIn} />
        <Main
          loggedIn={this.state.loggedIn}
          videoData={this.state.videoData}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

export default App;
