import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class Films extends Component {
  
  constructor(props) {
    super(props)
      this.state = {
      filter: "all",
  };
  }

  handleFilterClick(filter) {
    console.log(`Setting filter to ${filter}`);
    this.setState({
      filter: this.setState
    });
    console.log(`Filter is now set to ${filter}`);
  }

  render() {
    const allFilms = this.props.films.map((film) => {
      return (
      <FilmRow
      film={film}
      key={film.id}
      onFaveToggle={() => this.props.onFaveToggle(film)}
      />
    )
    })
    

    // PART 3 STEP 11?
    // In the App component's render method, add a new prop to the FilmListing component called onFaveToggle. Its value should be a reference to the handleFaveToggle method you just finished writing.
    // onFaveToggle handleFaveToggle

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}
