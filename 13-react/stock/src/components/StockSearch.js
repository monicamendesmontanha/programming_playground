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

  _handleInput(event) {
    console.log( event.target.value )
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('Clicked');
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
