import "./App.css";
// import axios from "axios";
import React from "react";
import Form from "./Components/Form"
import CardList from "./Components/CardList"

class App extends React.Component {
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
      <div class ="container">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}


export default App;