import React, { Component } from 'react'
import FilmPoster from './FilmPoster';
import Fave from './Fave';




export default class FilmRow extends Component {
  render() {

  //   handleDetailsClick=(e) => {
  //     console.log("Fetching details for" {this.props.film.title})
  // }

    const date = new Date(this.props.film.release_date).getFullYear()

    return (
        <div className="film-row">
        <FilmPoster poster={this.props.film.poster_path}/>

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{date}</p>
        </div>
        <Fave/> 
      </div>
    )
  }
}


