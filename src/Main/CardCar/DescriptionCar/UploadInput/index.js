import React, {useState} from 'react';
import {Upload} from "antd";
import './uploadInput.scss'
import ImgCrop from 'antd-img-crop';

export const UploadInput = () => {

        const handleChangeImage = async (file) => {
            const imageBase64 = await getBase64(file.originFileObj)
        }

        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        }

        return (
            <div className='upload-form'>
                <div className='input-upload_input'>
                    <span>{'Выберите файл...'}</span>
                </div>
                <ImgCrop rotate>
                    <Upload
                        listType="picture"
                        onChange={handleChangeImage}
                        className='input-upload_button'
                    >
                        Обзор
                    </Upload>
                </ImgCrop>
            </div>
        );
    }
;

