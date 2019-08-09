import React from 'react';

const Users = ({users}) => {
    return (
        <>
        <div className="user-list">
        {users.map((item, idx) => {
                return <p key={idx}>{item.username}</p>
			})}
        </div>
        </>
    )
}

export default Users;