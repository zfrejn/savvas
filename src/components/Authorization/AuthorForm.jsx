import React from 'react'

const AuthorForm = () => {
    return (  
        <form className='authorForm'>
            <p className='loginTitle'>
                Пожалуйста войдите.
            </p>
            <div className="loginInpWrapp">
                <input className='loginInp' placeholder='Email'></input>    
                <input className='loginInp' placeholder='Пароль' type='password'></input>   
                <button className='loginBtn'>Продолжить</button> 
            </div>
            <p className='reesPassword'>Восстановить пароль</p>
            <hr/>
            <div className="addProfLink">
                <p className='addProfDesc'>Еще не в Сейвер?</p>
                <p className='addProfileLink'>Добавить профиль:</p>
            </div>
            <div className="loginBtnWrap">
                <button className='iSkill'>Я талант</button>
                <button className='iCompany'>Я компания</button>
            </div>
        </form>  
    )
}

export default AuthorForm