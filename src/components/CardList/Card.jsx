import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import User from './User'

const Card = () => {
    return (
      <Link to={'/card'} className='cardLink'>
        <li className='cardItem'>
          <CardImage/>
          <User/>
          <CardInfo/>
        </li> 
      </Link> 
            
    )
}

export default Card