import React from 'react';

const FilmPoster = props => {
  const posterUrl = "https://image.tmdb.org/t/p/w780" + props.film.poster_path;
  return (
    <img src={posterUrl} alt={props.film.title} />
  )
}

export default FilmPoster
