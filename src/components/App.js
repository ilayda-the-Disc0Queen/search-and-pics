import React from 'react';
import unsplash from '../api/unsplash'; // convention to put imports from 3rd party packages above files we've created
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }; // empty array as we're expecting a list of images
  onSearchSubmit = async (searchTerm) => {
    // API request to unsplash goes here!
    const response = await unsplash.get('/search/photos', {
      params: { query: searchTerm}
    });
    this.setState({ images: response.data.results });
  }

  render () {
    return (
    <div className="ui container" style={{ marginTop: '16px' }}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      Found: {this.state.images.length} images
    </div>
      );
  };
} {/* DO NOT ADD ; TO LAST BRACKET IN A CLASS*/}

export default App;
