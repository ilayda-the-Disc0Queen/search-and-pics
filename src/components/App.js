import React from 'react';
import axios from 'axios'; // convention to put imports from 3rd party packages above files we've created
import SearchBar from './SearchBar'

class App extends React.Component {
  async onSearchSubmit(searchTerm) {
    // API request to unsplash goes here!
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchTerm},
      headers: {
        Authorization: 'Client-ID GHsPykq_WOuKAe4ruG1ef81xW-Tus9k9TuzXp-baUH4'
      }
    }).then((response) => { // promise based syntax
      // data that we've gotten back from unsplash api
      console.log(response.data.results)
    });
  }

  render () {
    return (
    <div className="ui container" style={{ marginTop: '16px' }}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
      );
  };
} {/* DO NOT ADD ; TO LAST BRACKET IN A CLASS*/}

export default App;
