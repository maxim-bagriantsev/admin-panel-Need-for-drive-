import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Menu} from 'antd';
import {iconPen, iconList, iconDoc, iconGrid, iconPanel, iconPerson, iconError} from './iconConstants'
import {NavLink, Route} from "react-router-dom";

const {SubMenu} = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export const Sider = () => {
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{width: '100%'}}
        >
            <NavLink to='/main/carSetting'>
                <SubMenu key="sub1" icon={<img src={iconPen} alt=""/>} title="Карточка автомобиля"/>
            </NavLink>
            <NavLink to='/main/carList'>
                <SubMenu key="sub2" icon={<img src={iconList} alt=""/>} title="Список авто"/>
            </NavLink>
            <NavLink to='/main/orderList'>
                <SubMenu key="sub3" icon={<img src={iconDoc} alt=""/>} title="Зказы"/>
            </NavLink>
            <NavLink to='#'>
                <SubMenu key="sub4" icon={<img src={iconGrid} alt=""/>} title="Menu 4"/>
            </NavLink>
            <NavLink to='#'>
                <SubMenu key="sub5" icon={<img src={iconPanel} alt=""/>} title="Menu 5"/>
            </NavLink>
            <NavLink to='#'>
                <SubMenu key="sub6" icon={<img src={iconPerson} alt=""/>} title="Menu 6"/>
            </NavLink>
            <NavLink to='#'>
                <SubMenu key="sub7" icon={<img src={iconError} alt=""/>} title="Menu 7"/>
            </NavLink>
        </Menu>
    );
};

