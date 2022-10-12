import React, { Component } from 'react'
import Details from './Details'
import Films from './Films'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

  render() {
    return (
      <><Films></Films><Details></Details></>

    )
    }
  }




