import React from "react";
import axios from "axios";
import * as Kairos from "../modules/kariosMethods"

class ziggeoRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      application_token: "120e5271e3f8259cc47311e11e135c46",
      video_token: "b22a0044b9398de3dad66bd73c0f7869"
    }
    // this.callZiggeo = this.callZiggeo.bind(this);
  }

  componentDidMount() {
    const embedding = new window.ZiggeoApi.V2.Application({
        token: "120e5271e3f8259cc47311e11e135c46"
    });

    embedding.embed_events.on("processed", (data) => {
        console.log('processed')
        console.log(data.application.videos)

        const videoToken = data.application.videos.__cache[Object.keys(data.application.videos.__cache)[0]].data.token

        Kairos.uploadKairos(videoToken, this.state.application_token)

        // var newDiv = document.createElement("div");
        // var newContent = document.createTextNode(videoToken);
      });
  }

  // callZiggeo() {
  //   // axios
  //   //   .get(
  //   //     `https://www.googleapis.com/youtube/v3/channels?access_token=${
  //   //       response.accessToken
  //   //     }&part=snippet&mine=true`
  //   //   )
  //   //   .then(res => {
  //   //     console.log(res);
  //   //   });
  // }

  render() {
    return <ziggeorecorder ziggeo-width="320" ziggeo-height="240" ziggeo-theme="modern" ziggeo-themecolor="red"> </ziggeorecorder>;
  }
}

export default ziggeoRecorder;
