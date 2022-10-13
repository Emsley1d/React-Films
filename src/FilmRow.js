import React, { Component } from 'react'
import FilmPoster from './FilmPoster';




export default class FilmRow extends Component {
  render() {

    const date = new Date(this.props.film.release_date).getFullYear()

    return (
        <div className="film-row">
        <FilmPoster poster={this.props.film.poster_path}/>

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{date}</p>


        </div>
      </div>
    )
  }
}


