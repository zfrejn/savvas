import React from 'react'
import { useSelector } from 'react-redux'


const CardOpenImg = ({img}) => {
    return (
        <div className='cardOpenImg' style={{backgroundImage:`url(${img})`}}></div>
    )
}

export default CardOpenImg