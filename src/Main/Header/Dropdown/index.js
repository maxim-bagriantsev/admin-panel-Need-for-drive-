import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Menu, Dropdown} from 'antd';
import dropdown from '../../../assats/SVG/dropdown.svg'

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="https://www.aliyun.com">3nd menu item</a>
        </Menu.Item>

    </Menu>
)

export const DropdownMenu = () => (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {<img src={dropdown} alt=""/>}
            </a>
        </Dropdown>
);
