import React from "react";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
    render(){
        return (
        <div className = "Post-container">
        <PostContainer 
          postArray = {this.props.filteredArray.length > 0 ? this.props.filteredArray : this.props.postDataArray}
          
          />
        </div>  
          )
    }
}

export default PostsPage;