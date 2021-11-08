import React from 'react';
import './contentInfo.scss'
import {MenuButton} from "./MenuButton";
import {Price} from "./Price";
import {CheckboxCard} from "./Checkbox";
import {InfoOrder} from "./InfoOrder";
import {useSelector} from "react-redux";
import {Spin} from "antd";

export const CardContent = () => {

    const {
        addedAllOrder
    } = useSelector((state) => {
        return state.reducerData
    })

    if (!addedAllOrder) {
        return <Spin/>
    }

    const orderItems = addedAllOrder.data.map((item, index) => {
        return (
            <div className='card-content' key={index}>
                <InfoOrder image={item.carId.thumbnail.path.includes('base64')
                    ? item.carId.thumbnail.path
                    : 'https://api-factory.simbirsoft1.com' + item.carId.thumbnail.path}
                           model={item.carId.name}
                           cityName={item.cityId?.name}
                           address={item.pointId?.address}
                           dateFrom={item.dateFrom}
                           dateTo={item.dateTo}
                           colors={[...item.carId.colors]}
                />
                <CheckboxCard/>
                <Price/>
                <MenuButton/>
            </div>
        )
    })

    return (
        orderItems
        // <div className='card-content'>
        //     <InfoOrder/>
        //     <CheckboxCard/>
        //     <Price/>
        //     <MenuButton/>
        // </div>
    );
};

