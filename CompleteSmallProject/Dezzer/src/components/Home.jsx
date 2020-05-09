import React, { Component } from "react";
import * as musicActions from "../actions/GetMusicGenres";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

class Home extends Component {
  state = {
    pageSize: 3,
    currentPage: 1
  };

  componentDidMount() {
    this.props.actions.getMusicGenres();
  }
  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
    console.log(page);
  };

  renderGenres = musics => {
    const albums = musics;
    debugger;
    return albums && albums.length ? (
      albums.map((item, index) => {
        return (
          <Col lg={2} key={index} className="d-flex">
            <Card key={item.id} className="mb-3 mt-3 w-100">
              <Card.Img
                variant="top"
                src={item.picture_xl}
                className={"img-fluid"}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>

                <Link
                  className="btn btn-light btn-md"
                  to={`/artists/${item.id}`}
                >
                  show artists
                </Link>
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
    const { loading, musics } = this.props;

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
        <Row>{!loading && this.renderGenres(musics)}</Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    musics: state.showMusics.musics,
    loading: state.showMusics.loading
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(musicActions, dispatch)
  };
}
const MusicList = connect(mapStateToProps, mapDispatchToProps)(Home);

export default MusicList;
