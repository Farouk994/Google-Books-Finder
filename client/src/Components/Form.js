
import axios from "axios";
import React from "react";

class Form extends React.Component {
  state = { books: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.books}&key=AIzaSyCS4ROvsyMQFPbHWyf2w4iRLivX36cohSQ`
    );
    // console.log(resp.json());
    const data = resp.data.items[0].volumeInfo;
    console.log(data);
    this.props.onSubmit(data);
    this.setState({ books: "" });
    // console.log(this.state.books)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ books: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button id="newBook">Add Book</button>
      </form>
    );
  }
}
export default Form;
