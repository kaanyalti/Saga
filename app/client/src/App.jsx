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
      videoData: [
        { id: "QJO3ROT-A4E", title: "What Makes You Beautiful" },
        { id: "Jwgf3wmiA04", title: "Drag Me Down" },
        { id: "W-TE_Ys4iwM", title: "Story of My Life" },
        { id: "o_v9MY_FMcw", title: "Best Song Ever" },
        { id: "AbPED9bisSc", title: "Live While We're Young" },
        { id: "Y1xs_xPb46M", title: "One Thing" }
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
