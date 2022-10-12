import React, { Component } from "react";
import TMDB from "./TMDB";

export default class Films extends Component {
  render() {
    
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>

          <h1>{TMDB.films[0].title.map}</h1>

        </div>
      </div>
    );
  }
}