import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='logoCont'>
          <Link to={'/'}>
            <div className='logo'></div>
          </Link>         
        </div>
    )
}

export default Logo