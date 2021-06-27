import React from "react";
//Filter  functionality is not working correctly. Could not figure it out.
export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="search"
            value={this.props.search}
            onChange={this.props.handleInputChange}
          ></input>

          <button>Search</button>
        </form>
      </div>
    );
  }
}