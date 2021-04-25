import "./App.css";
import React from "react";
import Form from "./Components/Form"
import CardList from "./Components/CardList"
import Navbar from "./Components/common/Header"

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
      <div className= "container">
        {/* <div className="header">{this.props.title}</div> */}
        <Navbar/>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}


export default App;
