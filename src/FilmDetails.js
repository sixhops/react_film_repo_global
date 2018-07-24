import React from 'react';
import {FilmContext} from './FilmContext';

const FilmDetails = props => {
  return (
    <FilmContext.Consumer>
      {
        ({current}) => {
          const backdropUrl = `https://image.tmdb.org/t/p/w1280/${current.backdrop_path}`
          const posterUrl = `https://image.tmdb.org/t/p/w780/${current.poster_path}`
          let details

          if (current.id) {
            // we have a film
            details = (
              <div className="film-detail is-hydrated">
                <figure className="film-backdrop">
                  <img src={backdropUrl} alt="" />
                  <h1 className="film-title">{current.title}</h1>
                </figure>

                <div className="film-meta">
                  <h2 className="film-tagline">{current.tagline}</h2>
                  <p className="film-detail-overview">
                    <img src={posterUrl} className="film-detail-poster" alt={current.title} />
                    {current.overview}
                  </p>
                </div>
              </div>
            )
          } else {
            details = (
              <div className="film-detail">
                <p>
                  <i className="material-icons">subscriptions</i>
                  <span>No film selected</span>
                </p>
              </div>
            )
          }
          return (
            <div className="film-details">
              <h1 className="section-title">DETAILS</h1>
              {details}
            </div>
          )
        }
      }
    </FilmContext.Consumer>
  )  
}

export default FilmDetails
