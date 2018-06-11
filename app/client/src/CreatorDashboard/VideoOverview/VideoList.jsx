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
import Moment from "react-moment";


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
            const { id, publishedAt, title } = video;
            return (
              <Col md={{ size: 4 }} key={id}>
                <Card>
                  <iframe
                    title={title}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>
                    <i class="fas fa-align-center"></i>
                      Posted{" "}
                      <Moment fromNow>
                        {publishedAt.substring(0, publishedAt.length - 1)}
                      </Moment>
                    </CardSubtitle>
                    <CardText></CardText>
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
