import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Menu, Dropdown} from 'antd';
import dropdown from '../../../assets/SVG/dropdown.svg'

const menu = (
    <div className='user-panel'>
        <Menu>
            <Menu.Item key="0" disabled>
                <a>Меню</a>
            </Menu.Item>
            <Menu.Item key="1" disabled>
                <a>Настройки</a>
            </Menu.Item>
            <Menu.Item key="2" disabled>
                <a>Данные профиля</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a>Выйти</a>
            </Menu.Item>
        </Menu>
    </div>
)

export const DropdownMenu = () => (
    <div className='dropdown-menu'>
        <Dropdown
            overlay={menu}
            trigger={['click']}
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {<img src={dropdown} alt=""/>}
            </a>
        </Dropdown>
    </div>
);
