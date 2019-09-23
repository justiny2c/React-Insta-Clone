import React from 'react';
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";



class PostContainer extends React.Component {

    render(){
    return (
            <> 
                {this.props.postArray.map(postObject => (
                // return(
                <div className = "Post-object">
                    <div className ="Post-object-header">
                        <img src={postObject.thumbnailUrl}/>
                        <p className="Post-object-username">{postObject.username}</p>
                    </div>

                    <img src ={postObject.imageUrl} />

                
                    <CommentSection 
                        postComments = {postObject.comments}
                        postObject = {postObject}
                        />                  
                </div> 

                )
            )}
            </>
    )
}
}
export default PostContainer;