import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { burgerOpen } from '../../store/slice'

const Logo = () => {

  const dispatch = useDispatch()

    return (
        <div className='logoCont'>
          <Link to={'/'}>
            <div className='logo'></div>
          </Link>         
          <button className='openBtn' onClick={() => dispatch(burgerOpen({state: 'open', display: 'block'}))}/>
        </div>
    )
}

export default Logo