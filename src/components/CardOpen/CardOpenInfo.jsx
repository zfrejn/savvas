import React from 'react'
import CardOpenImg from './CardOpenImg'
import DescriptionCardOpen from './DescriptionCardOpen'
import DescriptionTitle from './DescriptionTitle'
import DopImg from './DopImg'
import Tags from './Tags'
import TitleCardOpen from './TitleCardOpen'
import UserInCardOpen from './UserInCardOpen'

const CardOpenInfo = ({title, descTitle, desription, tags, nick, name, img, userImg}) => {
    return (
        <div className='cardOpenInfo'>
            <CardOpenImg img={img}/>
            <DopImg/>
            <TitleCardOpen text={title}/>
            {/* <DescriptionTitle text={descTitle}/> */}
            {false || <DescriptionCardOpen desription={desription}/>}
            {false || <Tags tags={tags}/>}
            <UserInCardOpen nick={nick} name={name} img={userImg}/>
        </div>
    )
}

export default CardOpenInfo