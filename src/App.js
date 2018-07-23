import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film) {
    console.log("toggling fave")
    const faves = Array.from(this.state.faves)
    const filmIndex = faves.indexOf(film)
    if (filmIndex > -1) {
      // it has been found in faves, remove it!
      faves.splice(filmIndex, 1)
    } else {
      // it is not in faves yet
      faves.push(film)
    }
    this.setState({
      faves
    })
  }

  handleDetailsClick(film) {
    console.log("fetching details for", film)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios.get(url).then(response => {
      console.log(response)
      this.setState({
        current: response.data
      })
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing onFaveToggle={this.handleFaveToggle}
                     films={this.state.films}
                     faves={this.state.faves}
                     onDetailsClick={this.handleDetailsClick} />
        <FilmDetails film={this.state.current} />
      </div>

    );
  }
}

export default App;
