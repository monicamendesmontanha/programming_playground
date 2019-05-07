import React, { Component } from 'react';

class Secrets extends Component {

  constructor() {
    super();
    this.state = {
      //TODO: replace these via AJAX
      secrets: [{"id":1,"content":"I cleaned the toilet today","created_at":"2019-05-07T01:32:52.093Z","updated_at":"2019-05-07T01:32:52.093Z","url":"http://localhost:3000/secrets/1.json"},{"id":2,"content":"I fed my cats a month","created_at":"2019-05-07T01:33:13.824Z","updated_at":"2019-05-07T01:33:13.824Z","url":"http://localhost:3000/secrets/2.json"}]
    };
    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    // turn the content into a secret object
    const secret = {
      id: Math.random(),
      content: content
    };

    //TODO: ES6
    const newSecrets = this.state.secrets.slice(0); // ES5 copy
    newSecrets.push( secret );

    // add the secret to the state (the collection of secrets)
    this.setState({ secrets: newSecrets })


  }


  render() {
    return(
      <div>
        <h1>Tell us all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret }/>
        <Gallery secrets={ this.state.secrets }/>
      </div>

    );
  }
};

class SecretForm extends Component {

  constructor() {
    super();
    this.state = { content: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // console.log('submit', this.state.content);
    this.props.onSubmit( this.state.content );
    this.setState({ content: '' });   //reset the textarea
  }

  _handleChange(e) {
    // console.log('searching', e.target.value);
    this.setState({ content: e.target.value });
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell"/>
      </form>
    );
  }
};

class Gallery extends Component {
  render() {
    return(
      <div>
        {  this.props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
      </div>
    );
  }
};

export default Secrets;