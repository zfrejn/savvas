import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import User from './User'

const Card = ({name, nick, price, text}) => {
    return (
      <Link to={'/card'} className='cardLink'>
        <li className='cardItem'>
          <CardImage/>
          <User name={name} nick={nick}/>
          <CardInfo price={price} text={text}/>
        </li> 
      </Link> 
            
    )
}

export default Card