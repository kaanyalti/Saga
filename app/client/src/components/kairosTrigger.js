import React from "react";
import axios from "axios";

class KairosTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video_token: "b22a0044b9398de3dad66bd73c0f7869"
    }
    this.callKairos = this.callKairos.bind(this);
  }

  callKairos() {

    // const source_url = window.ZiggeoApi.Videos.source(this.state.video_token)
    axios
      .get("/api/kairos")
      .then(response => console.log(response))
      .catch(err => console.log("error: ", err));
  }

  render() {
    return <button onClick={this.callKairos}>Call Kairos</button>;
  }
}

export default KairosTrigger;
