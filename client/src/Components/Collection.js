import React from "react";

class Collection extends React.Component{

  state = {
    collection : "",
    date : new Date()
  }

  handleInputChange =(e)=>{
    const { name, value } = e.target;
    this.setState({
      [name] : value
    })
    // this.setState({value: e.target.value});
    
  }

  handleFormSubmit = (e) =>{
    e.preventDefault();
    this.setState({
      collection : ""
    })

    const collections = {
      collection : this.state.collection,
      date : this.state.date
    }
    // window.location = "/"
    console.log(collections)
    // window.location = "/MyCollections"
  }

  
   render(){
       return(
         <div>
        <form className="form">
        <div className="mb-3">
          <label className="form-label">Create Collection</label>
          <input 
          value={this.state.collection}
          onChange={this.handleInputChange}
          name="collection"
          type="text" 
          className="form-control" 
          >

          </input>
          {/* <div id="emailHelp" className="form-text">Pease Input valid Details</div> */}
        </div>
        
        <button 
        onClick={this.handleFormSubmit}
        type="submit" 
        className="btn btn-primary">
          Create
          </button>
      </form>
      </div>
       )
   }
}

export default Collection;