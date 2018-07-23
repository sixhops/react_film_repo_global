import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = props => {
  // const posterUrl = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path;
  let year = new Date(props.film.release_date).getFullYear();
  return (
    <div onClick={props.onDetailsClick} className="film-row">
      <FilmPoster film={props.film} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  )
}

export default FilmRow
