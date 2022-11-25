import React from 'react'
import Price from './Price'
import PriceBtns from './PriceBtns'

const CardOpenPrice = ({price}) => {
    return(
        <div className='wrapper'>
          <div className='cardOpenPrice'>
            <PriceBtns/>
          </div>  
        </div>
        
    )
}

export default CardOpenPrice