import React from 'react';
import TMDB from './TMDB';

export const FilmContext = React.createContext({
  changeCurrentFilm: () => {},
  toggleFavorite: () => {},
  films: TMDB.films,
  faves: [],
  current: {}
});
