import React from 'react'
import CardOpenImg from './CardOpenImg'
import DescriptionCardOpen from './DescriptionCardOpen'
import DescriptionTitle from './DescriptionTitle'
import Tags from './Tags'
import TitleCardOpen from './TitleCardOpen'
import UserInCardOpen from './UserInCardOpen'

const CardOpenInfo = () => {
    return (
        <div className='cardOpenInfo'>
            <TitleCardOpen text={'Я напишу сценарий и контент для вашей рекламной компании'}/>
            <CardOpenImg/>
            <DescriptionTitle text={'Описание'}/>
            <DescriptionCardOpen/>
            <Tags/>
            <UserInCardOpen/>
        </div>
    )
}

export default CardOpenInfo