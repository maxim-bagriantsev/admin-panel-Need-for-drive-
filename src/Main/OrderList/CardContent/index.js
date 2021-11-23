import React, {useState} from 'react';
import './contentInfo.scss'
import {MenuButton} from "./MenuButton";
import {Price} from "./Price";
import {CheckboxCard} from "./Checkbox";
import {InfoOrder} from "./InfoOrder";
import {useSelector} from "react-redux";
import {Empty} from "antd";


export const CardContent = () => {

    const [isVisibleButtonReady, setIsVisibleButtonReady] = useState(true)

    const {
        filteredOrders
    } = useSelector((state) => {
        return state.reducerData
    })
    if (!filteredOrders) {
        return ''
    }

    const orderItems = filteredOrders?.data?.map((item, index) => {

        return (
            <div className='card-content' key={index}>
                <InfoOrder image={item.carId?.thumbnail?.path.includes('base64')
                    ? item.carId.thumbnail?.path
                    : 'https://api-factory.simbirsoft1.com' + item.carId?.thumbnail?.path}
                           model={item.carId?.name}
                           cityName={item.cityId?.name}
                           address={item.pointId?.address}
                           dateFrom={item.dateFrom}
                           dateTo={item.dateTo}
                           colors={item.carId?.colors ? [...item.carId?.colors] : []}
                />
                <CheckboxCard isFullTank={item.isFullTank}
                              isNeedChildChair={item.isNeedChildChair}
                              isRightWheel={item.isRightWheel}

                />
                <Price price={item.price}/>
                <MenuButton orderStatusId={item.orderStatusId}/>
            </div>
        )
    })

    return (
        <>
            {!orderItems ? < Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> : orderItems}
        </>
    );
};

