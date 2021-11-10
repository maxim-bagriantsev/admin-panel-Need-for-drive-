import React from 'react';
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";
import './orderList.scss'
import 'antd/dist/antd.css';
import {useSelector} from "react-redux";

export const OrderList = () => {

    const {
        selectedPeriodTime,
    } = useSelector((state) => {
        return state.reducerData
    })

    const convertDate = (date) => {
        const dateNow = Date.now()
        const oneDay = 86400000 //милисекунды
        const day = dateNow - (oneDay * 1)
        const week = dateNow - (oneDay * 7)
        const month = dateNow - (oneDay * 30)
        const year = dateNow - (oneDay * 365)

        if (date === 'За сегодня') {
            return day
        }
        if (date === 'За неделю') {
            return week
        }
        if (date === 'За месяц') {
            return month
        }
        if (date === 'За год') {
            return year
        }
    }
    const getPeriod = convertDate(selectedPeriodTime)

    return (
        <div className='card-orderList'>
            <h2 className='card-orderList-title'>Заказы</h2>
            <div className='card-orderList-background'>
                <CardHeader getPeriod={getPeriod}/>
                <CardContent/>
                <CardFooter getPeriod={getPeriod}/>
            </div>
        </div>
    );
};

