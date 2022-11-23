import React from 'react'
import CardOpenInfo from './CardOpenInfo'
import CardOpenPrice from './CardOpenPrice'


const CardOpen = ({price, title, desription, tags, nick, name, img, userImg}) => {
    return (
        <div className='cardOpen'>
            <CardOpenInfo 
                title={title}
                descTitle={'Описание'}
                desription={desription} 
                tags={tags} 
                nick={nick}
                name={name}  
                img={img}  
                userImg={userImg}
            />
            <CardOpenPrice price={price}/>
        </div>
    )
}

export default CardOpen