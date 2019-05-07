import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json';  // Change this to Heroku URL once deployed.

class Secrets extends Component {

  constructor() {
    super();
    this.state = {
      secrets: []
    };
    this.saveSecret = this.saveSecret.bind(this);

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then( (results) => {
        this.setState({ secrets: results.data });
        setTimeout(fetchSecrets, 4000); // recursion
      });
    };
    fetchSecrets();
  }

  saveSecret(content) {
    // add the secret to the state (the collection of secrets)
    axios.post(SERVER_URL, { content: content }).then( (result) => {
      console.log( result )

      this.setState({ secrets: [...this.state.secrets, result.data ]});
    });
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