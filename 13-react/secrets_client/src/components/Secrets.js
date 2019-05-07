import React, { Component } from 'react';

class Secrets extends Component {

  constructor() {
    super();
    this.state = {
      //TODO: replace these via AJAX
      secrets: [{"id":1,"content":"I cleaned the toilet today","created_at":"2019-05-07T01:32:52.093Z","updated_at":"2019-05-07T01:32:52.093Z","url":"http://localhost:3000/secrets/1.json"}]
    }
  }


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
      <h3>Gallery</h3>
    );
  }
};

export default Secrets;