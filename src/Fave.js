import React, { Component } from 'react'


export default class Fave extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isFave: false,
  //   }

  // }

    handleClick=(e) => {
          e.stopPropagation()
          console.log('Handling Fave click!')
          this.props.onFaveToggle()
    }
    

    render() {

    const isFave = (this.props.onFaveToggle) ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={`film-row-fave ${onFaveToggle}`} onClick={(e) => this.handleClick(e)}>
        <p className="material-icons">{onFaveToggle}</p>
      </div>

    )
  }
}

