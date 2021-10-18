import React from 'react';
import {Upload} from "antd";
import './uploadInput.scss'

export const UploadInput = () => {
    return (
        <div className='upload-form'>
            <div className='input-upload_input'>
                <span>{'Выберите файл...'}</span>
            </div>
            <Upload
                listType="picture"
                // onChange={handleChange}
                className='input-upload_button'
            >
                Обзор
            </Upload>
        </div>
    );
};

