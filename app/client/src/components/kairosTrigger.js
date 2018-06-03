import React from "react";
import axios from "axios";

class KairosTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video_token: "b22a0044b9398de3dad66bd73c0f7869"
    }
    this.uploadKairos = this.uploadKairos.bind(this);
    this.retrieveKairos = this.retrieveKairos.bind(this);
  }


  uploadKairos() {
    axios
      .get("/api/kairos?kairos_method=upload")
      .then(response => console.log("successfully connected to the server"))
      .catch(err => console.log("error: ", err));
  }


  retrieveKairos() {
    axios
      .get("/api/kairos?kairos_method=retrieve")
      .then(() => console.log("successfully connected to the server"))
      .catch(err => console.log("error: ", err));
  }


  render() {
    return(
      <div>
        <button onClick={this.uploadKairos}>Upload to Kairos</button>
        <button onClick={this.retrieveKairos}>Retrieve Data</button>
      </div>
    )
  }
}

export default KairosTrigger;
