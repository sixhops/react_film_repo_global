import React, {Component} from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
  render() {
    // const posterUrl = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path;
    let year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row">
        <FilmPoster film={this.props.film} />

        <div className="film-summary">
          <h2>{this.props.film.title}</h2>
          <p>{year}</p>
        </div>
      </div>
    )
  }
}

export default FilmRow
