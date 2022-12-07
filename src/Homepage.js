import React from 'react';
import CommentsForm from './CommentsForm';

function Homepage() {
    return (
        <div>
            <div>
                <h1>Welcome to the virtual New Horizons museum!</h1>
                <h3>Before leaving please feel free to leave a comment for the museum!</h3>
                <h3>Thank you for visiting! Have a wonderful day!</h3>
            </div>
            <CommentsForm />
        </div>
    )
}

export default Homepage;