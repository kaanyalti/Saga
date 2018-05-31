import React from 'react'
import axios from 'axios'

class KairosTrigger extends React {
  constructor(props){
    super(props);
    this.callKairos = this.callKairos.bind(this)
  }

  callKairos(){
    axios.get('http//localhost:3001/api/kairos')
  }

  render(){
    return(
        <button onClick={this.callKairos}>Call Kairos</button>
    )
  }
}

export default KairosTrigger