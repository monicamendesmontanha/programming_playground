import React, { Component } from 'react';

class HelloUser extends Component {
  render() {
    // console.log( this.props.name )
    return (
      <h2>Hello {this.props.name || 'Mystery User' }</h2>
    )
  }
};

export default HelloUser;