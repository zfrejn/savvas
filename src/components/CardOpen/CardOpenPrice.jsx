import React from 'react'
import Price from './Price'
import PriceBtns from './PriceBtns'

const CardOpenPrice = ({price}) => {
    return(
        <div className='cardOpenPrice'>
            <Price price={price}/>
            <PriceBtns/>
        </div>
    )
}

export default CardOpenPrice