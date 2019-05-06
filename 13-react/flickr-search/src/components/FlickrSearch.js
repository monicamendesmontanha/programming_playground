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
  render() {
    return (
      <form>
        <input type="search" placeholder="Butterfly" required />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default FlickrSearch;