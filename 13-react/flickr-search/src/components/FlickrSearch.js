import React, { Component } from 'react';
import jsonp from 'jsonp-es6';

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

  _handleSubmit(event) {
    event.preventDefault();
    // AJAX request

  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" required />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default FlickrSearch;