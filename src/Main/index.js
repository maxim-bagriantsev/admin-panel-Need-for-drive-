import React from 'react';
import './main.scss'
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {RouteItem} from "./RouteItem";


export const Main = () => {
    return (
        <div className='main'>
            <Sidebar/>
            <div className='main-content'>
                <Header/>
                <RouteItem/>
                <Footer/>
            </div>
        </div>
    );
};
