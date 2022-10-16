import React, { Component } from 'react';
import './App.css';
import Details from './Details.js';
import Films from './Films.js';
import TMDB from './TMDB.js';

const films = TMDB.films


class App extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        films: films,
        faves: [],
        current: {}
      }

      this.handleFaveToggle = this.handleFaveToggle.bind(this)
    }

    handleFaveToggle(film) {
      const faves = this.state.faves.slice()
      const filmIndex = this.state.filmindex.indexOf()



    // if film in array will return indexOf() starting at 0
    // if film not found in array then indexOf() return 01

      (filmIndex === -1) ?
      faves.push(film):
      faves.splice(filmIndex, 1) 
    }


//     If the film is already in their favorites, then when the user clicks the button, they want to remove it from their favorites. You need to take it out of the faves array.
// If the film is not in their favorites, then when the user clicks the button, they want to add it to their favorites. You need to add it to the faves array.

    // function onFaveToggle() {
    //   if (film == 'fave') { 
    //   console.log(`Adding {this.props.film.title} to faves`)
    //   }
    //   else 
    //   console.log(`Removing {this.props.film.title} to faves`)
    // };

        // PART 3 STEP 11?
    // In the App component's render method, add a new prop to the FilmListing component called onFaveToggle. Its value should be a reference to the handleFaveToggle method you just finished writing.
    // onFaveToggle handleFaveToggle

  render() {

    this.setState({faves})

    return (
      <div className="App" >
        <div className="film-library">
          <Films films={this.props.films} />
          <Details films={this.props.current} />
        </div>
      </div>
    );
  }
}

export default App;
