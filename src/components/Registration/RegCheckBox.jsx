import React from 'react'

const RegCheckBox = () => {
    return (
        <label className="checkBox">
                <input type={'checkbox'} className='checkBoxReg'/>
            <p className='checkBoxDesc'>
                Нажимая «Создать профиль», вы принимаете
                условия <span className='agree'>Пользовательского соглашения</span> и 
                <span className='agree'> Политики конфиденциальности</span> Сейвер.
            </p>
        </label>
    )
}

export default RegCheckBox