import React, { Component } from 'react';
import { IEXClient } from 'iex-api';

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

  _handleInput(event) {
    console.log( event.target.value )
  }

  _handleSubmit(event) {
    event.preventDefault();
    const fetch = window.fetch.bind(window);
    const iex = new IEXClient(fetch);
    iex.stockCompany('AAPL').then(company => console.log(company))
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="AAPL" required onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default StockSearch;
