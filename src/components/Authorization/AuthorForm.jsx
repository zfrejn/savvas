import React from 'react'

const AuthorForm = () => {
    return (
        <form className='authorForm'>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Введите email...'/>
            <div id="emailHelp" class="form-text">Обязательное поле</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Введите пароль...'/>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Соглашаюсь</label>
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
        </form>
    )
}

export default AuthorForm