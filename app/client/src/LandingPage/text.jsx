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
  
  ContainerStyle = {
    margin: "auto",
    width: "60%",
    height: "200px"
  }

  JumbotronStyle = {
    lineHeight: "3",
    textAlign: "center",
    color: "red",
    fontSize: "3em",
    margin: "auto",
    height: "60%",
    paddingTop: "0px",
    paddingBottom: "0px",
    width: "60%",
    marginTop: "10%",
    backgroundColor: "white"
  }

  ImageStyle = {
    margin: "auto",
    width: "100%",
    height: "50%",
    objectFit: "cover"
  }
  
  LoginStyle = { 
    backgroundColor: "white",
    color: "red",
    width: "40%",
    margin: "auto",
    height: "15%"
  }
  render(){
    return (
      <div style={this.style}>
        <Jumbotron style={this.JumbotronStyle}>
          <img style={this.ImageStyle} src="https://images.unsplash.com/photo-1521014148220-f40cdadd2455?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c63fb75cb8e4e5c03c00e011aa33110a&auto=format&fit=crop&w=1065&q=80" />
          <span> 
           Google Login
          </span>
        </Jumbotron>
      </div>
    )
  }
}

export default LoginPage