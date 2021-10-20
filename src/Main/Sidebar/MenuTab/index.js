import React from 'react';
import {NavLink} from "react-router-dom";
import {panelList} from "./constants";
import Icon from '@ant-design/icons';
import './index.css';
import {Menu} from "antd";

export const MenuTab = () => {

    const tabItem = panelList.map((item, id) => {

        return (
            <Menu.Item
                key={id}
                icon={<Icon component={item.icon} className='menu-tab-icon'/>}

            >
                <NavLink
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
                defaultSelectedKeys={['1']}
                mode={'inline'}
                theme={'light'}
                className='menu-tabs'
            >
                {tabItem}
            </Menu>
        </>

    );
};

