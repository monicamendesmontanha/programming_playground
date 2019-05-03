import React, { Component } from 'react';

class Clickr extends Component {
  constructor() { //This runs the original React Component constructor which React needs to set up.
    super();
    this.state = { clicks: 0 } // Set up out initial state.
    this._incrementClicks = this._incrementClicks.bind(this); // Every event handle that needs acess to 'this' should be bound in the constructor.
  }


  _incrementClicks() {
    console.log( this );
    // this.state.clicks += 1; // Mutation won't work
    this.setState({clicks: this.state.clicks +1});
  }


  render() {
    return (
      <button  onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
    )
  }
};


export default Clickr;