import React from 'react'
import Logo from '../LeftPart/Logo'
import Buttons from './Buttons'
import CardSearch from './CardSearch'

const Header = () => {

    return (
        <div className='header'>
            <div className='headerWrapper'>
                <Logo/>
                <CardSearch/>
                <Buttons/>  
            </div>
            
        </div>
    )
}

export default Header