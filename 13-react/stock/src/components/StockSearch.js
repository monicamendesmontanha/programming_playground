import React, { Component } from 'react';

class StockSearch extends Component {
  render() {
    return (
      <div>
        <h1>STOCK SEARCH</h1>
        <SearchForm />
      </div>

    );
  }
}

class SearchForm extends Component {
  render() {
    return (
      <form>
        <input tyoe="search" placeholder="AAPL" required/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default StockSearch;
