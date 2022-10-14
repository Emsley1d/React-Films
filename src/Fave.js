import React, { Component } from 'react'


export default class Fave extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        
    }
  }

    handleClick=(e) => {
        e.stopPropagation()
        console.log("handling Fave click!")
    }

    render() {

    return (
        <div className="film-row-fave add_to_queue" onClick={this.handleClick}> 
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}
