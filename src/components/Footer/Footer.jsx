import React from 'react'
import FooterLogo from './FooterLogo'

const Footer = () => {
    return (
        <footer>
            {/* <div className='footerWrap'> */}
                {/* <FooterLogo/> */}
                <div class="example example_menu">
                    <div class="all">
                        <div class="lefter">
                            <div class="text">Контакты</div>
                        </div>
                        <div class="left">
                            <div class="text">Правила</div>
                        </div>
                        <div class="center">
                            <div class="explainer"><span>о нас</span></div>
                            <div class="text">Условия</div>
                        </div>
                        <div class="right">
                            <div class="text">Новости</div>
                        </div>
                        <div class="righter">
                            <div class="text">Соглашение</div>
                        </div>
                    </div>
                </div>
            {/* </div>     */}
        </footer>
    )
}

export default Footer