import React from 'react';
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import './orderList.scss'
import 'antd/dist/antd.css';
import {useAllStatusOrder} from "../../hook/useAllStatusOrder";

export const OrderList = () => {

    useAllStatusOrder()

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

