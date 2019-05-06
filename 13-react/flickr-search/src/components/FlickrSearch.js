import React, { Component } from 'react';
import jsonp from 'jsonp-es6';
import _ from 'underscore'

// previous version: $.ajax / $.getJSON => jsonp
// axios does not support JSONP
// library: "jsonp es6"

class FlickrSearch extends Component {

  render() {
    return(
      <div>
        <h1>Image Search</h1>
        <SearchForm />
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  fetchImages(query) {
    console.log('Searching Flickr for', query)
  }

  _handleInput(event) {
    this.setState({query: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    // AJAX request
    this.fetchImages( this.state.query )

  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" required onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default FlickrSearch;