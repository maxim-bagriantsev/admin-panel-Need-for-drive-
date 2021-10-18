import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button} from 'antd';
import './buttonCarSettingn.scss'

export const ButtonCarSetting = () => {
    return (
        <div className='buttons'>
            <div className='buttons-group'>
                <Button className='button-save' type="primary">Сохранить</Button>
                <Button className='button-cancel' type="primary">Отменить</Button>
            </div>
            <div className='buttons-one'>
                <Button className='button-delete' type="primary">Удалить</Button>
            </div>

        </div>
    );
};

