import React from 'react';

const Users = ({users}) => {
    return (
        <>
        <div className="user-list">
        {users.map((item) => {
                return <p>{item.username}</p>
			})}
        </div>
        </>
    )
}

export default Users;