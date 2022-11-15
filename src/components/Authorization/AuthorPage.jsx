import React from 'react'
import AuthorForm from './AuthorForm'
import AuthorTitle from './AuthorTitle'

const AuthorPage = () => {
    return (
        <div className='authorization'>
            <AuthorTitle title={'Авторизация'}/>
            <AuthorForm/>
        </div>
    )
}

export default AuthorPage