import React from "react";

class Collection extends React.Component{
   render(){
       return(
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Create Collection</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" class="form-text">Pease Input valid Details</div>
        </div>
        
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
       )
   }
}

export default Collection;