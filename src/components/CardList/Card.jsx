import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cardOpen } from '../../store/slice'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import User from './User'

const Card = ({name, nick, price, text, id, userImg, cardImg}) => {

  const dispatch = useDispatch()

    return (
      <Link to={'/card'} className='cardLink' onClick={() => dispatch(cardOpen(id))}>
        <li className='cardItem'>
          <CardImage img={cardImg}/>
            <User name={name} nick={nick} userImg={userImg}/>
            <CardInfo price={price} text={text}/>      
        </li> 
      </Link> 
            
    )
}

export default Card