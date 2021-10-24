import React from 'react';
import {DropdownItems} from "./Dropdown";

import {Button} from "antd";
import './headerContent.scss'

export const CarsHeader = () => {
    return (
        <div className='content-header'>
            <div className='cars-header'>
                <DropdownItems className='dropdown-item'/>
                <Button className='card-header-button' type="primary">Применить</Button>
            </div>
        </div>
    );
};

