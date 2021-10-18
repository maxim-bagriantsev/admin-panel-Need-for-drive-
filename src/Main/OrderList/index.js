import React from 'react';
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import './card.scss'
import 'antd/dist/antd.css';

export const OrderList = () => {
    return (
        <div className='card-orderList'>
            <h2 className='card-orderList-title'>Заказы</h2>
            <div className='card-orderList-background'>
                <CardHeader/>
                <CardContent/>
                <CardFooter/>
            </div>
        </div>
    );
};

