import React, { Component } from "react";
import Navigation from "./components/Layout/Navigation.jsx";
import Main from "./components/Layout/Main.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      userEmail: null,
      firstName: null,
      videoData: null
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

  mainStyle = {
    display: "flex"
  }

  render() {
    return (
      <div>
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
