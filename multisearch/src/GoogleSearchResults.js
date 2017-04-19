import React from 'react';

class GoogleSearchResults extends React.Component {

  fetchResults() {
    const api = 'https://www.googleapis.com/customsearch/v1?';
    // Keys missing, as they are in the filesystem
    let query = this.props.query;

    let url = api + 'key='+key + '&cx='+cx + '&q='+query;

    console.log(url);
  }

  render() {

    this.fetchResults();

    if (this.props.query.length > 0) {
      return(
        <div>
          <h2>Google results</h2>
          <p>with query: {this.props.query}</p>
        </div>
      )
    } else {
      return(
        null
      )
    }


  }

}

export default GoogleSearchResults
