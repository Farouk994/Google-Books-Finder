import axios from "axios";
import React from "react";

class Form extends React.Component {
  state = { books: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const APIkey =
      process.env.APIkey || "AIzaSyCS4ROvsyMQFPbHWyf2w4iRLivX36cohSQ";
    const resp = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.books}&key=${APIkey}`
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
      <div align = "center">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(event) => this.setState({ books: event.target.value })}
            placeholder="Search Books"
            id="formGroupExampleInput"
            required
          />
          <button className ="btn btn-primary"id="newBook">Search</button>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Form;
