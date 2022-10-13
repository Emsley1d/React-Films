import React, { Component } from "react";
import FilmRow from './FilmRow'



export default class Films extends Component {

  render() {

    var allFilms = this.props.films.map((film, index) => (
    <FilmRow film={film} key={film.id}/>
     ))

    const handleFilterClick = (e) => {
      console.log("Setting filter to ")
  }

     return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
          <div className="film-list-filter">
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className="film-list-filter">
              FAVES
              <span className="section-count">0</span>
          </div>
      </div>
  
      {allFilms}
  </div>
     )
 }
}

