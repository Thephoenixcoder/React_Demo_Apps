import React, { Component } from "react";
import { getMovies } from "../services/movies.services";
import Pagination from "../common/pagination";
import { paginate } from "../utils/utils";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 3,
    currentPage: 1
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({
      movies: [...movies]
    });
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
    console.log(page);
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <h2 className="font-weight-bold">
          There are no Movies in the database.
        </h2>
      );

    const moviesList = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <React.Fragment>
        <h2 className="font-weight-bold">showing {count} of movies</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {moviesList.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
