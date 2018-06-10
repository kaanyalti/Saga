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
    this.getCookie = this.getCookie.bind(this);
  }


  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }


  componentDidUpdate(){
    const cookieEmail = this.getCookie("email");
    console.log("UPDATE", cookieEmail)
    console.log("UPDATE STATE", this.state.userEmail)
    console.log("UPDATE", this.state.userEmail === cookieEmail)

  }

  componentDidMount(){
    const cookieEmail = this.getCookie("email");
    console.log("MOUNT", cookieEmail)
    console.log("MOUNT STATE", this.state.userEmail)
    console.log("MOUNT", this.state.userEmail === cookieEmail)


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
