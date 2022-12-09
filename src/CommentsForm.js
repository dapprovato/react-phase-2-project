import React, { useState } from 'react';

function CommentsForm({ onSubmit }) {
    const [comment, setComment] = useState({
        name: "",
        comment: "",
    })

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(comment);
        event.target.reset()
    }

    function handleChange(event) {
        setComment({
            ...comment,
            [event.target.id]: event.target.value
        })
    }

    console.log(comment)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="name" onChange={handleChange} />
                <input type="text" id="comment" placeholder="comment" onChange={handleChange} />
                <button type="submit">Submit comment</button>
            </form>
        </div>
    )
}

export default CommentsForm;