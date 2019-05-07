import React, { Component } from 'react';

class Secrets extends Component {
  render() {
    return(
      <div>
        <h1>Tell us all your secrets</h1>
        <SecretForm />
        <Gallery />
      </div>

    );
  }
};

class SecretForm extends Component {
  render() {
    return(
      <h2>Form</h2>
    );
  }
};

class Gallery extends Component {
  render() {
    return(
      <h2>Gallery</h2>
    );
  }
};

export default Secrets;