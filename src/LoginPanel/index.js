import React, {useState} from "react";
import logo from '../assets/SVG/logo.svg'
import './main.scss'
import {postLogIn} from "../api/api";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {message} from "antd";
import './index.css';

message.config({
    top: 0,
    duration: 3,
    maxCount: 1,
});

export const LoginPanel = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory()
    const dispatch = useDispatch()

    const hendleChangeUserName = (event) => {
        setUserName(event.target.value)
    }

    const hendleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const logIn = {
        username: username,
        password: password
    }

    const hendleClickLogIn = () => {

        const info = () => {
            message.info('Вы ввели не верный логин или пароль');
        };

        postLogIn(logIn)
            .then(response => {
                localStorage.setItem('token', JSON.stringify(response.data.access_token))
                dispatch({type: 'SET_AUTHORIZATION', payload: true})
                return history.push(`/main/carSetting`)
            })

            .catch(error => {
                dispatch({type: 'SET_AUTHORIZATION', payload: false})
                info()
            });
    }

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
                            <input className='item-input'
                                   type="text"
                                   placeholder=""
                                   autoComplete='on'
                                   maxLength='20'
                                   value={username}
                                   onChange={hendleChangeUserName}
                            />
                            <p className='input-item-text'>Пароль</p>
                            <input className='item-input'
                                   type="password"
                                   placeholder=''
                                   autoComplete='on'
                                   maxLength='20'
                                   value={password}
                                   onChange={hendleChangePassword}
                            />
                        </div>
                    </form>
                    <div className='login-page_footer'>
                        <a className='login-page_footer-text' href='#'>Запросить доступ</a>

                        <button className='login-page_footer-btn'
                                onClick={hendleClickLogIn}
                        >Войти
                        </button>

                    </div>
                </div>
            </section>
        </div>
    )
}