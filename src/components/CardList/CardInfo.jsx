import React from 'react'
import CardDescription from './CardDescription'
import CardPrice from './CardPrice'

const CardInfo = () => {
    return (
        <div className='cardInfo'>
            <CardDescription text={
                `Я напишу сценарий и контент 
                для  рекламной компании`
            }/>
            <CardPrice price={80000}/>
        </div>        
    )
}

export default CardInfo