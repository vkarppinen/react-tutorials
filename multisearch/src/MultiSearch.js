import React from 'react';
import GoogleSearchResults from './GoogleSearchResults'

class MultiSearch extends React.Component {

  constructor() {
    super();

    this.state = {
      query: '',
      dispatchedQuery: '',
    },
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  search() {
    this.setState({
      dispatchedQuery: this.state.query
    })
  }

  render() {

    return (
      <div>
        <h1>MultiSearch</h1>
        <input type="text" placeholder="Be curious" onChange={this.handleQueryChange}/>
        <input value="Search" type="submit" onClick={() => this.search()}/>

        <GoogleSearchResults query={this.state.dispatchedQuery}/>

      </div>
    );
  }
}

export default MultiSearch;
