import React from 'react'
import CompanyName from './CompanyName'
import NavBar from './NavBar'

const NavMenu = () => {
    return (
        <div className='navMenu'>
          <NavBar/>
          <CompanyName name={'©2016-2022 Саввас'}/>
        </div>
    )
}

export default NavMenu