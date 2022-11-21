import React from 'react'
import Logo from '../LeftPart/Logo'
import Buttons from './Buttons'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerWrapper'>
                <Logo/>
                <div className="cardSearch">
                    <input className='searchInput' placeholder='Поиск...'/>
                    <button className='searchBtn'>Поиск</button>
                </div>
                <Buttons/>  
            </div>
            
        </div>
    )
}

export default Header