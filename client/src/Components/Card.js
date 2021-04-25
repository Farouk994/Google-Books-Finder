import React from "react";
import { render } from "react-dom";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile container" id="newBook">
        <img src={profile.imageLinks.thumbnail} alt="books"></img>
        <div className="info">
          <div className="name">{profile.title}</div>
          <div className="company">{profile.authors}</div>
          <div className="company">{profile.publishedDate}</div>
          <div className="company">
            <em>{profile.description}</em>
          </div>
          <button>Add Book</button>
          <button>Remove Book</button>
          <br></br>
          <hr></hr>
          <br></br>
        </div>
      </div>
    );
  }
}
export default Card;

// style="max-width: '540px';"
