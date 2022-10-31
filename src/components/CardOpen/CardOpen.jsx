import React from 'react'
import CardOpenInfo from './CardOpenInfo'
import CardOpenPrice from './CardOpenPrice'


const CardOpen = () => {
    return (
        <div className='cardOpen'>
            <CardOpenInfo/>
            <CardOpenPrice/>
        </div>
    )
}

export default CardOpen