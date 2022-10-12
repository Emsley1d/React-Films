import React, { Component } from "react";
import TMDB from "./TMDB";

// console.log(TMDB)

export default class Films extends Component {
  render() {
    let allFilms = TMDB.films.map((item) => item.title);

    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <ul>
            <h1>{allFilms}</h1>
          </ul>
        </div>
      </div>
    );
  }
}


// TMDB imported to Films + console.log confirms linked
// Films imported to FilmRow
// ! NEITHER TMDB OR FILM LINKED WITH FILMROW?????