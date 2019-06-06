import React from "react";
import PostContainer from "./PostContainer";
import styled from 'styled-components';


class PostsPage extends React.Component {
    render(){
        return (
        <PostDiv className = "Post-container">
        <PostContainer 
          postArray = {this.props.filteredArray.length > 0 ? this.props.filteredArray : this.props.postDataArray}
          
          />
        </PostDiv>  
          )
    }
}
const PostDiv = styled.div `
    font-family: 'proxima-nova', sans-serif;
    margin-bottom: 5px;
`
export default PostsPage;