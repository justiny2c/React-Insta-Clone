import React from "react";
import "./CommentSection.css";
import styled from 'styled-components';

class CommentSection extends React.Component {
    state = {
        comments: this.props.postComments,
        commentValue: "",
        likes: this.props.postObject.likes,
        liked: false
    }

    handleChange = e => {
        e.preventDefault();
        // e.target.reset;
        this.setState({
            commentValue: e.target.value
        })
        
    }
    
    addComment = e => {
        e.preventDefault();

        const newComment = {username: "delajusjus", text: this.state.commentValue}

        this.setState({
            comments: [...this.state.comments, newComment]
            })
    }
    
    addLike = e => {
        e.preventDefault();

        const likedOne = this.state.likes + 1
        const unLiked = this.state.likes - 1

        if(this.state.liked === false){
        this.setState({
            likes: likedOne,
            liked: true
            })
        } else  {
            this.setState({
                likes: unLiked,
                liked: false
            })
        }  
        };
    

    render(){
    return (

        <PostDiv className ="Post-section">
            <div className = "like-bar">
            <img
                className="like-button"
                onClick={this.addLike}
                src = {require("../SearchBar/instagramHeart.png")}/>
            {/* <img
                className="like-button hidden"
                onClick={this.addLike}
                src = {require("./instagramRedHeart.png")}/>     */}
            <img 
                className="comment-button"
                src = {require("../SearchBar/instagramChat.png")}/>
            </div>

            <p className="likes">{this.state.likes} likes</p>

            {this.state.comments.map(comment => (
            
            <div className = "comment">
                <p className="username">{comment.username}</p>
                <p>{comment.text}</p>
            </div> 
            ))}
        

                    <form
                        className = "form">
                        <Input
                            placeholder="Add a comment..."
                            onChange={this.handleChange}
                            value={this.state.commentValue}>
                            </Input>
                        <button
                            onClick={this.addComment}>...</button>    
                    </form>
            </PostDiv>       
    )
}
}

const Input = styled.input `
    width: 100%;
    height: 35px;
    border: none;
    font-size: 1rem;
`

const PostDiv = styled.div `
    font-family: 'proxima-nova', sans-serif;
    font-size: 1rem;
    `



// class HeartClick {
//     constructor(heart){
//         this.heart = heart
//         this.heart.addEventListener("click", () => this.clickHeart());
//     }

//     clickHeart(){
        
//         this.heart.classList.add("hidden");
    
//     }
// }

// let heart = document.querySelectorAll(".like-button").forEach( element => new HeartClick(element) )

export default CommentSection;