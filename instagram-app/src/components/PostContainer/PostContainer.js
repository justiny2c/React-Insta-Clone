import React from 'react';
import CommentSection from "../CommentSection/CommentSection";


function PostContainer(props) {

    console.log(props)
    return (
            <> 
//             {props.postArray.map(postObject => (
                // return(
                <div className = "Post-object">
                    <CommentSection postComments = {postObject.comments} />
                </div>)
            )}
            </>
    )
}
export default PostContainer;