import React from 'react';

function Comments({ comments }) {
    return (
    <div>
        {comments.map((comment) =>
            <h4>{comment.comment} -- {comment.name}</h4>
        )}
    </div>
    )
}

export default Comments;