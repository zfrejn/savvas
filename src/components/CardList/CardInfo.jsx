import React from 'react'
import CardDescription from './CardDescription'
import CardPrice from './CardPrice'

const CardInfo = ({price, text}) => {
    return (
        <div className='cardInfo'>
            <CardDescription text={text}/>
            <CardPrice price={price}/>
        </div>        
    )
}

export default CardInfo