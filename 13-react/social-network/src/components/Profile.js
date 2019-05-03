import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      height: 100
    };

    this._zoonIn = this._zoonIn.bind(this)
    this._zoonOut = this._zoonOut.bind(this)
  }

_zoonIn() {
  this.setState({ height: this.state.height + 10 })
}

_zoonOut() {
  this.setState({ height: this.state.height - 10 })
}

  render() {
    const { name, age, motto, pic } = this.props; // destructuring
    return (
      <div className="profile">
        <h2>{ name }'s profile coming soon</h2>
        <h3>{ age }</h3>
        <p>{ motto }</p>
        { this.state.height }
        <div>
          <button onClick={ this._zoonIn }> + </button>
          <button onClick={ this._zoonOut }> - </button>
        </div>
        <img src={ pic } alt={ name } height={ this.state.height }/>
      </div>
    );
  }
}

export default Profile;