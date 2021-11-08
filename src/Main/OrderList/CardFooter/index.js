import React from 'react';
import './cardFooter.scss'
import {Pagination, Spin} from "antd";
import 'antd/dist/antd.css';
import './index.css';
import {useSelector} from "react-redux";

export const CardFooter = () => {

    const {
        addedAllOrder
    } = useSelector((state) => {
        return state.reducerData
    })

    if (!addedAllOrder) {
        return <Spin/>
    }

    return (
        <div className='card-footer'>
            <Pagination current={5}
                        total={addedAllOrder.count}
            />
        </div>
    );
};
