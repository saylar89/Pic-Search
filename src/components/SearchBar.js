import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onInputSubmit} className="ui small form">
          <div>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ marginTop: "10px" }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
