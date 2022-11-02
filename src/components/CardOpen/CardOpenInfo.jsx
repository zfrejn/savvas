import React from 'react'
import CardOpenImg from './CardOpenImg'
import DescriptionCardOpen from './DescriptionCardOpen'
import DescriptionTitle from './DescriptionTitle'
import Tags from './Tags'
import TitleCardOpen from './TitleCardOpen'
import UserInCardOpen from './UserInCardOpen'

const CardOpenInfo = ({title, descTitle, desription, tags, nick, name, img, userImg}) => {
    return (
        <div className='cardOpenInfo'>
            <TitleCardOpen text={title}/>
            <CardOpenImg img={img}/>
            <DescriptionTitle text={descTitle}/>
            <DescriptionCardOpen desription={desription}/>
            <Tags tags={tags}/>
            <UserInCardOpen nick={nick} name={name} img={userImg}/>
        </div>
    )
}

export default CardOpenInfo