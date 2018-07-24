import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
import {FilmContext} from './FilmContext';

const FilmRow = props => {
  return (
    <FilmContext.Consumer>
      {
        ({changeCurrentFilm}) => {
          let year = new Date(props.film.release_date).getFullYear()
          return (
            <div onClick={() => changeCurrentFilm(props.film)} className="film-row">
              <FilmPoster film={props.film} />

              <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{year}</p>
              </div>
              <Fave isFave={props.isFave} film={props.film} />
            </div>
          )
        }
      }
    </FilmContext.Consumer>
  )
}

export default FilmRow
