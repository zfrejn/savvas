import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const CardList = () => {

    const cards = useSelector(state => state.reducer.cards)

    return (
        <ul className='cardList'>
            {cards.map((item, i) => <Card name={item.name} nick={item.nick} price={item.price} key={i} text={item.text}/>)}
        </ul>
    )
}

export default CardList