import React from 'react';
import './cardFooter.scss'
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import './index.css';

export const CardFooter = () => {
    return (
        <div className='card-footer'>
            <Pagination defaultCurrent={6} total={100} />
        </div>
    );
};
