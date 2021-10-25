import React from 'react';

function UserItem(props) {
    const {id, image, name, email, isGoldClient, payment, deleteUserFromList } = props;
    console.log(props)
    return(
        <div className="card">
            <img src={image} alt=""/>
            <h2>{ name }</h2>
            <p>{ email }</p>
            {
                isGoldClient
                    ? <p>Gold client</p>
                    : null
            }
            <p>Payment: $ {payment}</p>
            <button onClick={() => deleteUserFromList(id)}>Delete</button>
        </div>
    );
}

export default UserItem;