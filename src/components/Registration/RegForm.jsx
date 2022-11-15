import React from 'react'

const RegForm = () => {
    return (
        <form className='authorForm'>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Введите email...'/>
                <div id="emailHelp" className="form-text">Обязательное поле</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Введите пароль...'/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Соглашаюсь</label>
            </div>
            <button type="submit" className="btn btn-primary">Войти</button>
        </form>   
    )
}

export default RegForm