import React, { Component } from 'react'; // destructuring


class HelloWorld extends Component {    // Same in ROR = class User < ActiveRecord::Base
  // every react component must have a method called render()
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default HelloWorld;