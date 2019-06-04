import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"

function CommentSection(props){
    console.log(props)
    return (
        <>
        {props.postComments.map(comment => (
            
            <div className = "comment">
                <p className="username">{comment.username}</p>
                <p>{comment.text}</p>
            </div>
        ))}
        </>
    )
}

// CommentSection.propTypes = {
//     comment: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             username: PropTypes.string.isRequired,
//         })
//     )
// }

export default CommentSection;