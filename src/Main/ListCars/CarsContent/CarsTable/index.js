import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Spin, Table} from 'antd';
import './tableCars.scss'
import {useAllCar} from "../../../../hook/useAllCar";
import {useSelector} from "react-redux";
import {columns} from "./common/colums";

export const CarsTable = () => {

    useAllCar()
    const {
        addedAllCar
    } = useSelector((state) => {
        return state.reducerData
    })

    if (!addedAllCar) {
        return <Spin/>
    }

    //выбираем машину для редактирования
    const hendleChange = () => {

    }

    const listCarsTable = addedAllCar?.map((item) => {
        return {
            thumbnail: item.thumbnail,
            modelCar: item.name,
            classCar: item.categoryId,
            regSign: item.number,
            minPrice: item.priceMin,
            maxPrice: item.priceMax
        }
    })

    return (
        <div className='table-cars'>
            <Table size="small"
                   columns={columns}
                   pagination={{position: 'bottomCenter'}}
                   dataSource={listCarsTable}
                   onChange={hendleChange}
            />
        </div>)
};

