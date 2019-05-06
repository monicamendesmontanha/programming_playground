import React, { Component } from 'react';

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
    console.log('form submit');
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