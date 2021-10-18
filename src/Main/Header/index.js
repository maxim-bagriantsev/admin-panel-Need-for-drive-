import React from 'react';
import notification from '../../assats/SVG/notification.svg';
import './header.scss';
import avatar from '../../assats/Images/avatar.png';
import {DropdownMenu} from './Dropdown';
import search from '../../assats/SVG/search.svg'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='block-1'>
                    <img className='input-icon-search' src={search} alt=""/>
                    <input className='header-input' placeholder='Поиск ...' type="text"/>
                </div>
                <div className='block-2'>
                    <div>
                        <img className='header-icon' src={notification} alt=""/>
                        <div className='header-icon-circle'>2</div>
                    </div>
                </div>
                <div className='block-3'>
                    <div className='header-panel'>
                        <img className='header-panel-avatar' src={avatar} alt=""/>
                        <div className='panel-user-text'>Admin</div>
                        <DropdownMenu/>
                    </div>
                </div>
            </div>
        </div>
    );
};

