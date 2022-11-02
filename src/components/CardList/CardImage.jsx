import React from 'react'


const CardImage = ({img}) => {
    return (
        <div className='cardImage' style={{backgroundImage:`url(${img})`, backgroundSize: 'cover'}}></div> 
    )
}

export default CardImage