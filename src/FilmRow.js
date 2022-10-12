import React, { Component } from 'react'

export default class FilmRow extends Component {
  render() {
    return (
        <div className="film-row">
        <img src={posterUrl} alt="" />
      
        <div className="film-summary">
          <h1>TITLE</h1>
          <p>YEAR</p>
        </div>
      </div>
    )
  }
}
