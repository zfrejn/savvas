import React from 'react'
import AddProfLink from './AddProfLink'
import LoginBtns from './LoginBtns'
import LoginInputs from './LoginInputs'
import LoginTitle from './LoginTitle'
import ReesPassword from './ReesPassword'

const AuthorForm = () => {
    return (  
        <form className='authorForm'>
            <LoginTitle title='Пожалуйста войдите.'/>
            <LoginInputs/>
            <ReesPassword/>
            <hr/>
            <AddProfLink/>
            {/* <LoginBtns/> */}
        </form>  
    )
}

export default AuthorForm