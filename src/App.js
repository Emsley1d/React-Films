import React, { Component } from 'react'
import Details from './Details'
import Films from './Films'
import FilmRow from './FilmRow'
import TMDB from './TMDB'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

  render() {

    let name = TMDB.films.map(el => (<h1 key={el.id}>el.title</h1>)) 
    let date = TMDB.films.map(el => (<p key={el.id}>el.release_date</p>))

    return (
      <><Films></Films><Details></Details>

      <FilmRow>

        {name}
        {date}

      </FilmRow>
      </>

    )
    }
  }




