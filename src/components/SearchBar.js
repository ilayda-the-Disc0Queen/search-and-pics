import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={this.onInputChange} /> {/* not {this.onInputChange()}. also u have to use onChange otherwise the function won't bbe called anytime the input is changed. <input type="text" onChange={(event) => console.log(event.target.value)} /> {/* this syntax is for when we have a single line of code (so we don't have to define a fn for it) */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
