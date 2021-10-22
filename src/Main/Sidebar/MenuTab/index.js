import React from 'react';
import {NavLink} from "react-router-dom";
import {panelList} from "./constants";
import Icon from '@ant-design/icons';
import './index.css';
import {Menu} from "antd";
import './menuTab.scss'

export const MenuTab = () => {

    const tabItem = panelList.map((item, id) => {

        return (
            <Menu.Item
                key={id}
                className='menu-tabs-item'
                icon={
                    <NavLink to={item.link}>
                        <Icon component={item.icon} className='menu-tab-icon'/>
                    </NavLink>
                }
            >
                <NavLink className='item-tab-title'
                         to={item.link}>
                    {item.title}
                </NavLink>
            </Menu.Item>
        )
    })

    return (
        <>
            <Menu
                style={{width: 256}}
                defaultSelectedKeys={['0']}
                mode={'inline'}
                theme={'light'}
                className='menu-tabs'
            >
                {tabItem}
            </Menu>
        </>
    );
};

