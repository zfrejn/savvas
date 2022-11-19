import React from 'react'
import LoginButton from './LoginButton'

const LoginInputs = () => {
    return (
        <div className="loginInpWrapp">
            <input className='loginInp' placeholder='Email'></input>    
            <input className='loginInp' placeholder='Пароль' type='password'></input>   
            <LoginButton text='Продолжить'/>
        </div>
    )
}

export default LoginInputs