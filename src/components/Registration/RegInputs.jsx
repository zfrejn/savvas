import React from 'react'

const RegInputs = () => {
    return (
        <>
            <input className='loginInp' placeholder='Имя'/>   
            <input className='loginInp' placeholder='Фамилия'/>   
            <input className='loginInp' placeholder='Рабочий Email'/>   
            <input className='loginInp' placeholder='Рабочий телефон'/>   
            <input type={'password'} className='loginInp' placeholder='Придумайте пароль'/>   
        </> 
    )
}

export default RegInputs