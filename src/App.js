import React, { Component } from 'react'
import Details from './Details'
import Films from './Films'
import TMDB from './TMDB'

export default class App extends Component {

  render() {

    return (
      <div>
        <Films films={TMDB.films} ></Films>
        <Details films={TMDB.films} ></Details>
      </div>


    )
    }
  }




