import React from 'react';
import {DropdownItem} from "../CardFooter/Dropdown";
import doubleArrow from "../../../assets/SVG/doubleArrow.svg";
import {Button} from "antd";
import './headerContent.scss'

export const CardHeader = () => {
    return (
        <div className='content-header'>
            <div className='card-header'>
                <DropdownItem icon={<img src={doubleArrow} alt=""/>}/>
                <Button className='card-header-button' type="primary">Применить</Button>
            </div>
        </div>
    );
};

