import React, { Component } from 'react'
import TMDB from "./TMDB";
// import Films from './Films'; 


// let data = TMDB.films.map(el => (<h1 key={el.id}>el.title</h1>), (<p key={el.id}>el.release_date</p>))
// let poster = TMDB.films.map(e => <img key={e.id}></img>)
// let title = TMDB.films.title.map(el=> <h1 key={el.id}>el.title</h1>) 
// let date = TMDB.films.map(el => <p key={el.id}>el.release_date</p>)
// let img = TMDB.films.map(e => <img key={e.id}>e.src={posterUrl}</img>)




export default class FilmRow extends Component {
  render() {

    // let name = TMDB.films.title.map(item => (
    //   <Films name = {item} />
    // ))
    // let name = TMDB.films.map(el => (<h1 key={el.id}>el.title</h1>)) 
    // let date = TMDB.films.map(el => (<p key={el.id}>el.release_date</p>))
    // let img = TMDB.films.map(el => (<p key={el.id}>el.release_date</p>))



    return (
        <div className="film-row">
        {/* <img src={posterUrl} alt="" /> */}
      
        <div className="film-summary">
          <h1>{TMDB.films.title}</h1>
          <h1>{TMDB.films.release_date}</h1>


        {/* <h1>{this.props.title}</h1>
        <p>{this.props.release_date}</p> */}
          {/* {name}
          {date} */}
          {/* {img} */}

        </div>
      </div>
    )
  }
}

// const release_date = new date {TMDB.films.id.release_date}
