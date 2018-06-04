import React, { Component } from "react";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"
// class LandingPage extends Component {
//   LeftSideStyle = {
//     height: "505px",
//     background: "#D7ECEF",
//     borderRadius: "0"
//   }
  
//   titleStyle = {
//     fontSize: "3em"
//   }
  
 
//   VideoStyle = {
//     width: "75%",
//     backgroundColor: "#d8d8d8",
//     height: "60%",
//     zIndex: "999",
//     position: "fixed",
//     top: "20%",
//     borderRadius: "0px",
//     right: "10%",
//     marginBottom: "0"
//   }
  
  
//   DescriptionStyle = {
//     backgroundColor: "#fcfcfc",
//     color: "black",
//     height: "353.594px",
//     width: "40%",
//     textAlign: "center",
//     top: "35%",
//     right: "0",
//     float: "right",
//     position: "relative",
//     borderRadius: "0"
//   }
  
//   render(){
//     return (
//       <Grid>
//         <Row className="show-grid">
//           <Col xs={12} md={8}>
//             <Grid style={this.VideoStyle}>
//               <Row className="show-grid">
//                 <Col xs={12} md={12}>
//                   <Jumbotron style={this.DescriptionStyle}>
//                     <h1 style={this.titleStyle}>Welcome to Sága.</h1>
//                      We don't know what to say yet
//                     but we will by wednesday night:)
//                   </Jumbotron>
//                 </Col>
//               </Row>
//             </Grid>
//           </Col>
//         </Row>
//         <Row className="show-grid">
//           <Col xs={6} md={6}>
//             <Jumbotron style={this.LeftSideStyle}>
//             </Jumbotron>   
//           </Col>
//         </Row>
//       </Grid>
     
//     )
//   }
// }

// export default LandingPage

class LoginPage extends Component {
  style ={
    background: "#D7ECEF",
    height: "90%",
    width: "100%",
    position: "absolute"
  }

  ImageStyle = {
    margin: "auto",
    width: "20%",
    heigth: "10%",
  }

  LoginStyle = { 
    // for login page component
    backgroundColor: "white",
    color: "red",
    width: "20%",
    margin: "auto",
    height: "15%"
  }
render(){
  return (
  <div style={this.style}>
    <div>
      <img style={this.ImageStyle} src="https://images.unsplash.com/photo-1493970866116-fe0cad1a5727?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4a7a7bdfb162f53881a39a1a5a6a148&auto=format&fit=crop&w=1050&q=80" />
    </div>
    <Jumbotron style={this.LoginStyle}>
      <span> 
        Google Login
      </span>
    </Jumbotron>
  </div>
  )
}
}

export default LoginPage