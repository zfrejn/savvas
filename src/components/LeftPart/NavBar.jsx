import React from 'react'
import { useDispatch } from 'react-redux'
import { filterCards, removeFilter } from '../../store/slice'
import NavItem from './NavItem'

const NavBar = () => {
    const dispatch = useDispatch()
    return (
        <ul className='navBar'>
            <li className='navItem' onClick={() => dispatch(removeFilter())}>Все категории</li>
            <NavItem name={'IT'}/>
            <NavItem name={'Бизнес'}/>
            <NavItem name={'Дизайн '}/>
            <NavItem name={'Здоровье'}/>
            <NavItem name={'Маркетинг'}/>
            <NavItem name={'Образование'}/>
            <NavItem name={'Производство'}/>
            <NavItem name={'Работа'}/>
            <NavItem name={'Услуги'}/>
            <NavItem name={'Финансы'}/>
        </ul>
    )
}

export default NavBar