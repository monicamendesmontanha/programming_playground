import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { Counter: 0 };
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }

  _increment() {
    this.setState({ count: this.state.count + 1 });
  }

  _decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this._decrement}>-</button>
          <span>{ this.state.count }</span>
          <button onClick={this._increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;