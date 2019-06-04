import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css"


class PostContainer extends React.Component {
    state = {
        commentValue: ""
    }

handleChange = e => {
    e.preventDefault();
    this.setState({
        commentValue: e.target.value
    })

}

addComment = e => {
    e.preventDefault();
    this.setState({
        newComment: commentValue,
        })
}
    render(){
    return (
            <> 
                {this.props.postArray.map(postObject => (
                // return(
                <div className = "Post-object">
                    <img src ={postObject.imageUrl} />
                    
                    <div className ="Post-section">
                        <p className="likes">{postObject.likes} likes</p>
                        <CommentSection postComments = {postObject.comments} />
                    </div>

                    <form>
                        <input
                            placeholder="comment"
                            onChange={this.handleChange}
                            value={this.state.commentValue}>
                            </input>
                        <button
                            onClick={this.addComment}>Comment</button>    
                    </form>
                </div>)
            )}
            </>
    )
}
}
export default PostContainer;