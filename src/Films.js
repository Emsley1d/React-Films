import React, { Component } from "react";
import TMDB from "./TMDB";

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
