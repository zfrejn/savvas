import React from 'react'
import Logo from '../LeftPart/Logo'
import Buttons from './Buttons'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerWrapper'>
                <Logo/>
                <Buttons/>  
            </div>
            
        </div>
    )
}

export default Header