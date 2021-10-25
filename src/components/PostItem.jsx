import React from 'react';

function PostItem(props) {
  console.log(props)
    const {body, id, title} = props.post;
    return(
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>{title}</p>
        </div>
    );
}

export default PostItem;