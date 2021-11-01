import React, {useState} from 'react';
import {Upload} from "antd";
import ImgCrop from 'antd-img-crop';
import {useDispatch} from "react-redux";
import './uploadInput.scss';

export const UploadInput = ({addedImageCar}) => {

    const dispatch = useDispatch()

    const handleChangeImage = async ({file}) => {
        const imageBase64 = await getBase64(file.originFileObj)
        dispatch({type: "ADD_IMAGE_CAR", payload: file})
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
                <span>{addedImageCar ? ''
                    : 'Выберите файл...'}</span>
            </div>
            <ImgCrop rotate >
                <Upload
                    listType="picture"
                    className='input-upload_button'
                    onChange={handleChangeImage}
                >
                    Обзор
                </Upload>
            </ImgCrop>

        </div>
    );
}
