import React from 'react';
import axios from 'axios'; // convention to put imports from 3rd party packages above files we've created
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(searchTerm) {
    // API request to unsplash goes here!
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
