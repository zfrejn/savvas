import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { burgerClose } from '../../store/slice'
import NavMenu from './NavMenu'

const LeftPart = () => {

    const display = useSelector(state => state.reducer.burger.display)
    const dispatch = useDispatch()

    return (
        <div className='leftPart' style={{display: `${display}`}}>
            <div className='bttn' onClick={() => dispatch(burgerClose({state: 'close', display: 'none'}))}/>
            <NavMenu/>
        </div>
    )
}

export default LeftPart