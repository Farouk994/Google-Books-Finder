import "./App.css";
import React from "react";
import Form from "./Components/Form"
import CardList from "./Components/CardList"


class Home extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div>
      <div className= "container">
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
      </div>
    );
  }
}


export default Home;
