import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/common/Header"
import Home from "./Home";
import Collection from "./Components/Users"
import MyCollections from "./Components/myCollections"

function App(){
    return (
        <Router>
            <Header/>
            <div className="container">
            <Route path="/" exact component={Home}/>
            <Route path="/Collections" exact component={Collection}/>
            <Route path="/MyCollections" exact component={MyCollections}/>
            </div>
        </Router>
    )
}

export default App;