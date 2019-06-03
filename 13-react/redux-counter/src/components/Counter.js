import React, { Component } from 'react';

class Counter extends Component {
  _increment = () => {
    // TODO
  }

  _decrement = () => {
    // TODO
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this._decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this._increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;