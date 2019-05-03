import React, { Component } from 'react';

class Clickr extends Component {
  _incrementClicks() {
    console.log('yes, a click happened. there was a click')
  }

  render() {
    return (
      <button  onClick={ this._incrementClicks }>0 clicks so far</button>
    )
  }
};


export default Clickr;