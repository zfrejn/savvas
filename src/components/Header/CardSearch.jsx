import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cardSearcher } from '../../store/slice'

const CardSearch = () => {

    const cardSearch = useSelector(state => state.reducer.CardSearch)
    const dispatch = useDispatch()

    return (
        <div className="cardSearch">
            <input className='searchInput' placeholder='Поиск...' value={cardSearch} onChange={e => dispatch(cardSearcher(e.target.value))}/>
            <button className='searchBtn'>Поиск</button>
        </div>
    )
}

export default CardSearch