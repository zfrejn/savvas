import React from 'react'

const UserInCardOpen = ({name, nick, img}) => {
    return (
        <div className='userInCardOpen'>
            <div className='userImgCardOpen' style={{backgroundImage:`url(${img})`, backgroundSize: 'cover'}}></div>
            <div className='userNames'>
                <p className='userFullName'>{name}</p>
                <p className='userNick'>{nick}</p>
            </div>
        </div>        
    )
}

export default UserInCardOpen