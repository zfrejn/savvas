import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const CardList = () => {

    const cards = useSelector(state => state.reducer.cards)

    return (
        <ul className='cardList'>
            {cards.map((item, i) => {
                return (
                    <Card 
                        key={i}
                        name={item.name}
                        nick={item.nick}
                        price={item.price}
                        text={item.text}
                        id={item.id}
                        userImg={item.userImg}
                        cardImg={item.cardImg}
                    />
                )
            })}
        </ul>
    )
}

export default CardList