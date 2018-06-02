import React from "react";
import axios from "axios";

class KairosTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.callKairos = this.callKairos.bind(this);
  }

  callKairos() {
    axios
      .get("/api/kairos")
      .then(response => console.log("Kairos response: ", response.data))
      .catch(err => console.log("error: ", err));
  }

  render() {
    return <button onClick={this.callKairos}>Call Kairos</button>;
  }
}

export default KairosTrigger;
