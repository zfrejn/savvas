import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
    return (
        <div className='buttons'>
          <Link className='link' to='/authorization'><button className='input'>Войти</button></Link>
          <Link className='link' to='/'><button className='login'>Регистрация</button></Link>
        </div>
    )
}

export default Buttons