import React, { Component } from "react";
import Navigation from "./components/Layout/Navigation.jsx";
import Sidebar from "./components/Layout/Sidebar.jsx";
import Main from "./components/Layout/Main.jsx";
// import Moment from 'react-moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      userEmail: null,
      firstName: null,
      videoData: null,
      currentPage: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
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

  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div>
        <Navigation loggedIn={this.state.loggedIn} />
        <div className="wrapper">
          {this.state.currentPage === "videoDetail" ? <div></div> : <div></div>}
          <Main
            setCurrentPage={this.setCurrentPage}
            loggedIn={this.state.loggedIn}
            videoData={this.state.videoData}
            handleLogin={this.handleLogin}
          />
        </div>
      </div>
    );
  }
}

export default App;
