import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
    return (
        <ul className='navBar'>
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