import React from 'react';
import logo from "../../assats/SVG/logo.svg";
import './sidebar.scss'
import {Sider} from "./Sider";

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='sidebar-content'>
                    <img className='sidebar-header-image'
                         src={logo}
                         alt="Logo"/>
                    <h3 className='sidebar-header-title'>Need for car</h3>
                </div>
            </div>
            <Sider/>
        </div>
    );
};

