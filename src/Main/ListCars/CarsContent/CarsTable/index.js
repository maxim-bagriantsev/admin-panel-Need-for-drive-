import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Table} from 'antd';
import './tableCars.scss'

const columns = [
    {
        title: 'Фотография машины',
        dataIndex: 'imgCar',
        key: 'imgCar',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Модель',
        dataIndex: 'modelCar',
        key: 'modelCar',
    },
    {
        title: 'Класс',
        dataIndex: 'classCar',
        key: 'classCar',
    },
    {
        title: 'Регистрационный знак',
        key: 'regSign',
        dataIndex: 'regSign',
    },
    {
        title: 'Минимальная цена',
        key: 'minPrice',
        dataIndex: 'minPrice',
    },
    {
        title: 'Максимальная цена',
        key: 'maxPrice',
        dataIndex: 'maxPrice',
    },
];

const data = [
    {
        key: '1',
        name: 'Elantra',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export const CarsTable = () => {
    return (
        <div className='table-cars'>
            <Table columns={columns}
                   pagination={{position: 'bottomCenter' }}
                                      dataSource={data}
            />
        </div>)
};

