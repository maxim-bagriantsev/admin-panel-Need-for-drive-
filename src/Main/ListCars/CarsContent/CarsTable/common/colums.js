import React from "react";

export const columns = [
    {
        title: 'Фотография машины',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        render: (thumbUrl) => (
            <img
                src={(thumbUrl?.path.includes('base64')) ? thumbUrl.path : 'https://api-factory.simbirsoft1.com' + thumbUrl.path}
                alt="image"
                style={{height: '30px'}}
            />
        )
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
        render: (categoryId) => categoryId?.name
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