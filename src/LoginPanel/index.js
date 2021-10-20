import React from "react";
import logo from '../assets/SVG/logo.svg'
import './main.scss'
import {NavLink} from "react-router-dom";

export const LoginPanel = () => {
    return (
        <div className='login-page'>
            <section className='login-page-form-content'>
                <div className='login-page_header'>
                    <img className='login-page_header-image'
                         src={logo}
                         alt="Logo"/>
                    <h3 className='login-page_header-title'>Need for drive</h3>
                </div>
                <div className='login-page-form'>
                    <h3 className='login-page-form-title'>Вход</h3>
                    <form action="">
                        <div className='login-page-form-input'>
                            <p className='input-item-text'>Почта</p>
                            <input className='item-input' type="text" placeholder aria-autocomplete='' autoComplete='on'
                                   maxLength='20'/>
                            <p className='input-item-text'>Пароль</p>
                            <input className='item-input' type="password" placeholder=''/>
                        </div>
                    </form>
                    <div className='login-page_footer'>
                        <a className='login-page_footer-text' href='#'>Запросить доступ</a>
                        <NavLink to='/main'>
                            <button className='login-page_footer-btn'>Войти</button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}