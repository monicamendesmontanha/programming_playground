import React, { Component } from 'react';
import { IEXClient } from 'iex-api';
import { EventEmitter } from 'events';

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

  constructor() {
    super();
    this.state = { query: '' };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  fetchStocks(query) {
    console.log('searching for', query)
  }

  _handleInput(event) {
    // console.log( event.target.value )
    this.setState({ query: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.fetchStocks( this.state.query)
    // const fetch = window.fetch.bind(window);
    // const iex = new IEXClient(fetch);
    // iex.stockCompany('AAPL').then(company => console.log(company))
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
