import React, { useState, useEffect } from "react";
import Comments from './Comments';
import CommentsForm from './CommentsForm';

function Homepage() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/comments")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setComments(data);
          });
      }, []);

    function onSubmit(comment) {
        setComments([...comments, comment])
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
            });
    }

    return (
        <div>
            <div className="home">
                <h1>Welcome to the virtual New Horizons museum!</h1>
                <h3>Before leaving please feel free to leave a comment for the museum!</h3>
                <h3>Thank you for visiting! Have a wonderful day!</h3>
            </div>
            <CommentsForm onSubmit={onSubmit} />
            <Comments comments={comments}/>
        </div>
    )
}

export default Homepage;