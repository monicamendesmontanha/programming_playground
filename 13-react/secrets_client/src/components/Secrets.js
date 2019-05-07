import React, { Component } from 'react';

class Secrets extends Component {

  constructor() {
    super();
    this.state = {
      //TODO: replace these via AJAX
      secrets: [{"id":1,"content":"I cleaned the toilet today","created_at":"2019-05-07T01:32:52.093Z","updated_at":"2019-05-07T01:32:52.093Z","url":"http://localhost:3000/secrets/1.json"},{"id":2,"content":"I fed my cats a month","created_at":"2019-05-07T01:33:13.824Z","updated_at":"2019-05-07T01:33:13.824Z","url":"http://localhost:3000/secrets/2.json"}]
    }
  }


  render() {
    return(
      <div>
        <h1>Tell us all your secrets</h1>
        <SecretForm />
        <Gallery secrets={ this.state.secrets }/>
      </div>

    );
  }
};

class SecretForm extends Component {
  render() {
    return(
      <form>
        <textarea></textarea>
        <input type="submit" value="Tell"/>
      </form>
    );
  }
};

class Gallery extends Component {
  render() {
    return(
      <div>
        {  this.props.secrets.map( (s) => <p key={ s.id }>{ s.content } </p> ) }
      </div>
    );
  }
};

export default Secrets;