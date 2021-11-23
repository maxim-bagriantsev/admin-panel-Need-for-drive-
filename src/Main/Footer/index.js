import React from 'react';
import './footer.scss'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <div className='footer-left-text'>Главная страница</div>
                <a className='footer-left-link' href="">Ссылка</a>
            </div>
            <div className='footer-right'>
                <p className='footer-right-copyright'>Copyright © 2020 Simbirsoft</p>
            </div>
        </div>
    );
};

