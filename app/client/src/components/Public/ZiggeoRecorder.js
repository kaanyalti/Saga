import React from 'react'
import axios from 'axios'
import * as Kairos from "../modules/kairosMethods"
import { apiKeys } from '../env.js'

class ZiggeoRecorder extends React.Component {
  constructor() {
    super();
    this.state = {
      videoToken: ""
    };
    // this.callZiggeo = this.callZiggeo.bind(this);
  }

  componentDidMount() {
    var embedding = new window.ZiggeoApi.V2.Application({
      token: apiKeys.ziggeoApplicationToken,
    })

    embedding.embed_events.on('processed', function(data) {
      console.log('processed')
      console.log(data)
      console.log(data.application.videos)
      const cacheData   = data.application.videos.__cache
      const cacheKey    = Object.keys(cacheData)[0]
      const videoToken  = cacheKey

      if (this.state.videoToken == ""){
        Kairos.uploadKairos(videoToken);
        this.setState(() => {
          return {videoToken: videoToken}
        });
      };
    })
  }

  render() {
    return (
      <ziggeorecorder
        ziggeo-width="320"
        ziggeo-height="240"
        ziggeo-theme="modern"
        ziggeo-themecolor="red"
      >
        {' '}
      </ziggeorecorder>
    )
  }
}

export default ZiggeoRecorder
