import React from 'react';
import './index.css';
import {Menu, Dropdown, Button, Space} from 'antd';
import {firstDropdown, twoDropdown, freeDropdown, fourDropdown} from "./const";
import doubleArrow from '../../../../assets/SVG/doubleArrow.svg'

const menu = (
    <Menu>
        <Menu.Item key="1">
            1st menu item
        </Menu.Item>
        <Menu.Item key="2">
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
            3rd menu item
        </Menu.Item>
    </Menu>
);

export const DropdownItem = () => {
    return (
        <Space wrap>
            <Dropdown overlay={menu}>
                <Button className='header-content-dropdown'>
                    {firstDropdown}
                    <img className='content-dropdown-icon' src={doubleArrow} alt=""/>
                </Button>
            </Dropdown>
            <Dropdown overlay={menu}>
                <Button className='header-content-dropdown'>
                    {twoDropdown}
                    <img className='content-dropdown-icon' src={doubleArrow} alt=""/>
                </Button>
            </Dropdown>
            <Dropdown overlay={menu}>
                <Button className='header-content-dropdown'>
                    {freeDropdown}
                    <img className='content-dropdown-icon' src={doubleArrow} alt=""/>
                </Button>
            </Dropdown>
            <Dropdown overlay={menu}>
                <Button className='header-content-dropdown'>
                    {fourDropdown}
                    <img className='content-dropdown-icon' src={doubleArrow} alt=""/>
                </Button>
            </Dropdown>
        </Space>
    );
};

