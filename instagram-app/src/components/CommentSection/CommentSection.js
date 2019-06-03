import React from "react";

function CommentSection(props){
    console.log(props)
    return (
        props.postComments.map(comment => (
            
            <div className = "comment">
                <p>{comment.comment}</p>
            </div>
        ))
    )
}

export default CommentSection;