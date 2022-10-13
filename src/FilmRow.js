import React, { Component } from 'react'
import TMDB from "./TMDB";
// import Films from './Films';

// console.log(Films.films.id)
// console.log(Films.films)
// console.log(TMBD.films)
// console.log(TMBD.films.id)


let data = TMDB.films.map(el => <h1 key={el.id}>el.title</h1>, <p>el.release_date</p>)




export default class FilmRow extends Component {
  render() {


    return (
        <div className="film-row">
        {/* <img src={posterUrl} alt="" /> */}
      
        <div className="film-summary">
          {data}
          {}



        </div>
      </div>
    )
  }
}

// const release_date = new date {TMDB.films.id.release_date}
