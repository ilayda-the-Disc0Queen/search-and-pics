import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFormSubmit = (event) => {
    event.preventDefault(); // stops browser from trying to submit form automaticalyly
    // when user hits enter, and refreshing the page (default browser behaviour)
    this.props.onSubmit(this.state.searchTerm); // need to include 'this' because we're using props in a class component
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={event => this.setState({ searchTerm: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

