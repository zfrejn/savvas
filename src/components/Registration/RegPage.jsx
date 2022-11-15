import React from 'react'
import AuthorTitle from '../Authorization/AuthorTitle'
import RegForm from './RegForm'

const RegPage = () => {
    return (
        <div className='authorization'>
            <AuthorTitle title={'Регистрация'}/>
            <RegForm/> 
        </div>
    )
}

export default RegPage 