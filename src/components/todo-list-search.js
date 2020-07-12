import React, {Component} from "react";

export default class TodoListSearch extends Component {
  state = {
    searchQuery: ""
  }

  onSearchResultChanged = (e) => {
    const searchQuery = e.target.value;
    this.setState({searchQuery});
    this.props.onSearchResultChanged(searchQuery);
  }

  render() {
    const {searchQuery} = this.state;

    return (
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={this.onSearchResultChanged}
      />
    );
  }
}