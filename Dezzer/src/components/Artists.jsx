import React, { Component } from "react";
import * as albumsAction from "../actions/GetArtistsGenres";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Card, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
class Artists extends Component {
  componentDidMount() {
    this.props.actions.getAlbums(this.props.match.params.id);
  }

  renderArtists = artists => {
    const artist = artists;

    return artist && artist.length ? (
      artist.map((item, index) => {
        return (
          <Col lg={2} key={index} className="d-flex">
            <Card key={item.id} className="mb-3 mt-3 w-100">
              <Card.Img
                variant="top"
                src={item.picture}
                className={"img-fluid"}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })
    ) : (
      <p>no result</p>
    );
  };
  render() {
    const { loading, artists } = this.props;
    return (
      <Container fluid>
        <Row>
          {loading && (
            <Loader
              type="Bars"
              color="#00BFFF"
              height={100}
              width={100}
              className={"loader_wrapper"}
            />
          )}
        </Row>
        <Row>{!loading && this.renderArtists(artists)}</Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    artists: state.showAlbums.artists,
    loading: state.showAlbums.loading
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumsAction, dispatch)
  };
}
const AlbumList = connect(mapStateToProps, mapDispatchToProps)(Artists);
export default AlbumList;
