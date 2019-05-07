import React, { Component } from 'react';
import { IEXClient } from 'iex-api';

class StockSearch extends Component {
  constructor() {
    super();
    this.state = { info: [] };
    this.fetchStocks = this.fetchStocks.bind(this); // this == StockSearch
  }

  fetchStocks(query) {
    // console.log('searching for', query)
    const fetch = window.fetch.bind(window);
    const info = new IEXClient(fetch);
    info.stockCompany(query).then(company => this.setState({ info: company })
    )
  }

  render() {
    return (
      <div>
        <h1>STOCK SEARCH</h1>
        <SearchForm onSubmit={ this.fetchStocks } />
        <Info info={ this.state.info }  />
      </div>
    );
  }
}


const Info = function (props) {
  return (
    <ul>
      <li> Company Name: { props.info.companyName }</li>
      <li> CEO: { props.info.CEO }</li>
      <li> Description: { props.info.description }</li>
      <li> Industry: { props.info.industry }</li>
      <li> Sector: { props.info.sector }</li>
      <li> Website: { props.info.website }</li>
    </ul>
  )
};

class SearchForm extends Component {

  constructor() {
    super();
    this.state = { query: '' };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleInput(event) {
    // console.log( event.target.value )
    this.setState({ query: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.query)
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
