import React from 'react'
import { Link } from 'react-router-dom'

const ReesPassword = () => {
    return (
        <Link to={'/reesPassword'} className='cardLink'>
            <p className='reesPassword'>Восстановить пароль</p>
        </Link>
    )
}

export default ReesPassword