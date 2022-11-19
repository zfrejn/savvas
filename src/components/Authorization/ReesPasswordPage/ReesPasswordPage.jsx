import React from 'react'
import LoginButton from '../LoginButton'
import LoginTitle from '../LoginTitle'
import EmailTitle from './EmailTitle'
import ReesDesc from './ReesDesc'
import ReesInp from './ReesInp'

const ReesPasswordPage = () => {
    return (
        <form className='authorForm' style={{paddingTop: '100px'}}>
            <LoginTitle title={'Восстановить пароль'}/>
            <EmailTitle title={'Email указанный при регистрации'}/>
            <ReesInp/>
            <ReesDesc description={'На этот email вам будет выслана инструкция по восстановлению пароля'}/>
            <LoginButton text={'Отправить'}/>
        </form>
    )
}

export default ReesPasswordPage