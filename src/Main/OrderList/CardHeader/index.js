import React from 'react';
import {DropdownItems} from "../CardFooter/Dropdown";
import doubleArrow from "../../../assets/SVG/doubleArrow.svg";
import {Button} from "antd";
import './headerContent.scss'
import {useAllStatusOrder} from "../../../hook/useAllStatusOrder";
import {useSelector} from "react-redux";

export const CardHeader = () => {

    return (
        <div className='content-header'>
            <div className='card-header'>
                <DropdownItems className='dropdown-item' icon={<img src={doubleArrow} alt=""/>}/>
                <Button className='card-header-button' type="primary">Применить</Button>
            </div>
        </div>
    );
};

