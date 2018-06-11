import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
import Moment from 'react-moment';


class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  containerStyle = {
    marginTop: "5vh"
  };

  render() {
    return this.props.videoData.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <Container style={this.containerStyle}>
        <Row>
          {this.props.videoData.map(video => {
            return (
              <Col md={{ size: 4 }} key={video.id}>
                <Card>
                  <iframe
                    title={video.title}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <CardBody>
                    <CardTitle>{video.title}</CardTitle>
                    <CardSubtitle><Moment>{video.publishedAt.substring(0, video.publishedAt.length - 1)}</Moment></CardSubtitle>
                    <Link to={`/admin/videos/${video.id}`}>{video.title}</Link>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default VideoList;
