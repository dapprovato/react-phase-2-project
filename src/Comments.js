import React, { useState, useEffect } from 'react';

function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/comments")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setComments(data);
          });
      }, []);

    return (
    <div>
        {comments.map((comment) =>
            <h4>{comment.comment} -- {comment.name}</h4>
        )}
    </div>
    )
}

export default Comments;