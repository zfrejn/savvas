import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../Authorization/LoginButton'
import LoginTitle from '../Authorization/LoginTitle'
import RegCheckBox from './RegCheckBox'
import RegDesc from './RegDesc'
import RegInputs from './RegInputs'

const RegForm = () => {
    return (
        <form className='authorForm' style={{minHeight: '810px'}}>
            <LoginTitle title={'Регистрация компании'}/>
            <RegDesc text={'Создайте страничку работодателя для найма талантов и продвижения HR-бренда'}/>
            <RegInputs/>
            <RegCheckBox/>
            <LoginButton text={'Создать профиль'}/>
            <p className='loginInReg'>
                Уже в CANVAS? <Link to='/authorization' className='cardLink'><span className='loginLink'>Войти</span></Link>
            </p>
        </form>   
    )
}

export default RegForm