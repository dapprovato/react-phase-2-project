import React, { useState } from 'react';

function CommentsForm() {
    const [comment, setComment] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        // const formData = 
    }

    function handleChange(event) {
        setComment(event.target.value)
    }

    console.log(comment)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type="submit">Submit comment</button>
            </form>
        </div>
    )
}

export default CommentsForm;