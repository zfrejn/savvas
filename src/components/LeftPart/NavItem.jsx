import React from 'react'
import { useDispatch } from 'react-redux'
import { filterCards } from '../../store/slice'

const NavItem = ({name}) => {
    const dispatch = useDispatch()
    return (
        <li className='navItem' onClick={() => dispatch(filterCards(name))}>{name}</li>
    )
}

export default NavItem