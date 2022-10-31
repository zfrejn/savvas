import React from 'react'

const User = ({name, nick}) => {
    return (
        <div className='user'>
            <div className='userImg'></div>
            <div className='userInfo'>
                <p className='userName'>{name}</p>
                <p className='userLogin'>{nick}</p>
            </div>
        </div>
    )
}

export default User