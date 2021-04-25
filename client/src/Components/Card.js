import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <div class="card mb-3" style={{ width: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={profile.imageLinks.thumbnail} alt="google-books"></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{profile.title}</h5>
                <h6>{profile.authors}</h6>
                <p class="card-text">{profile.subtitle}</p>
                <p class="card-text">
                  <small class="text-muted">{profile.publishedDate}</small>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">
              Add Book
            </button>
            <button type="button" class="btn btn-danger">
              Remove Book
            </button>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}
export default Card;

// style="max-width: '540px';"
