import React from 'react'

const User = ({name, nick, userImg}) => {
    return (
        <div className='user'>
            {/* <div className='userImg' style={{backgroundImage:`url(${userImg})`, backgroundSize: 'cover'}}></div> */}
            <div className='userInfo'>
                <p className='userName'>{name}</p>
                <p className='userLogin'>{nick}</p>
            </div>
        </div>
    )
}

export default User