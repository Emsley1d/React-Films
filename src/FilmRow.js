import React, { Component } from 'react'
import TMDB from "./TMDB";
import Films from './Films';

console.log(Films.films.id)
console.log(Films.films)
console.log(TMBD.films)
console.log(TMBD.films.id)



export default class FilmRow extends Component {
  render() {
    return (
        <div className="film-row">
        {/* <img src={posterUrl} alt="" /> */}
      
        <div className="film-summary">
          <h1>{TMDB.films.id.title}</h1>
          
          <p>{TMDB.films.id.release_date}</p>



        </div>
      </div>
    )
  }
}

// const release_date = new date {TMDB.films.id.release_date}
