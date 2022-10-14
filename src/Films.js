import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class Films extends Component {
  state = {
    filter: "all",
  };

  handleFilterClick(filter) {
    console.log(`Setting filter to ${filter}`);
    // this.setState({
    //   filter: filter,
    // });
    // console.log(`Filter is now set to ${filter}`);
  }

  render() {
    const allFilms = this.props.films.map((film) => (
      <FilmRow film={film} key={film.id} />
    ));

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            onClick={() => this.handleFilterClick("faves")}
            className="film-list-filter"
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}
