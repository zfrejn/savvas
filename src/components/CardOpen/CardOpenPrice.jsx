import React from 'react'
import Price from './Price'
import PriceBtns from './PriceBtns'

const CardOpenPrice = () => {
    return(
        <div className='cardOpenPrice'>
            <Price price={80000}/>
            <PriceBtns/>
        </div>
    )
}

export default CardOpenPrice