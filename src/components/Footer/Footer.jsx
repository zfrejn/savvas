import React from 'react'
import FooterLogo from './FooterLogo'

const Footer = () => {
    return (
        <footer>
            <div className='footerWrap'>
                <div className='footerLogo'></div>
                <ul className='footerNav'>
                    <li className='footerNavItem'>О нас</li>
                    <li className='footerNavItem'>Новости</li>
                    <li className='footerNavItem'>Условия</li>
                    <li className='footerNavItem'>Соглашение</li>
                </ul>
                <div className='footerForm'>
                    <input className='footerInput' placeholder='Email'></input>
                    <button className='footerBtn'>Подписаться</button>
                </div>
                <div className='companyNameFooter'>
                    © ООО «САВВАС» 2022
                </div>
            </div>
        </footer>
    )
}

export default Footer