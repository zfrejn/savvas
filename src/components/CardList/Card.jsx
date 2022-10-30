import React from 'react'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import User from './User'

const Card = () => {
    return (
        <li className='cardItem'>
          <CardImage/>
          <User/>
          <CardInfo/>
        </li>        
    )
}

export default Card