import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css"


function PostContainer(props) {
    return (
            <> 
                {props.postArray.map(postObject => (
                // return(
                <div className = "Post-object">
                    <img src ={postObject.imageUrl} />
                    
                    <div className ="Post-section">
                        <p className="likes">{postObject.likes} likes</p>
                        <CommentSection postComments = {postObject.comments} />
                    </div>
                    
                    <form>
                        <input
                            placeholder="comment"></input>
                    </form>
                </div>)
            )}
            </>
    )
}
export default PostContainer;