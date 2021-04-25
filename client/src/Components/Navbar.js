import React from "react";
import Header from "./common/Header"

class Navbar extends React.Component {
  render() {
      function getPages(){

          const  route = window.location.pathname;
          if(route === "") return 
          if(route === "") return
        }
    return (
   <div>
     {getPages()}
     <Header/>
   </div>
    );
  }
}

export default Navbar;
