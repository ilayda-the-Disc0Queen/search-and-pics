import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(searchTerm) {
    console.log(searchTerm)
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
