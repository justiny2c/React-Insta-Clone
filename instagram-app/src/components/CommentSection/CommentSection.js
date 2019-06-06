import React from "react";
import "./CommentSection.css"

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

        const newComment = {username: "justin", text: this.state.commentValue}

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
        <>
        <div className ="Post-section">
            <div className = "like-bar">
            <img
                className="like-button"
                onClick={this.addLike}
                src = {require("../SearchBar/instagramHeart.png")}/>
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
                        <input
                            placeholder="Add a comment..."
                            onChange={this.handleChange}
                            value={this.state.commentValue}>
                            </input>
                        <button
                            onClick={this.addComment}>...</button>    
                    </form>
            </div>       
        </>
    )
}
}

export default CommentSection;