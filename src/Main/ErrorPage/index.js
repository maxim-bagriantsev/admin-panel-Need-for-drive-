import React from "react";
import {ErrorComponent} from "../ErrorComponent";

export const ErrorPage = () => {
    return (
        <ErrorComponent
            status='404'
            title='Что-то пошло не так'
            message='Попробуйте перезагрузить страницу'
        />
    )
}
