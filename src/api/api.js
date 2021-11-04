import axios from "axios";
import {urls} from "./urls";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
        'Authorization': 'Basic MTIzNG06NGNiY2VhOTZkZQ=='
    }
})


//авторизация
export const postLogIn = (logIn) => {
    return axiosInstance.post(urls.logIn(), logIn)
}

//Добавление машины
export const postCardCar = (access_token,cardCar) => {

    return axiosInstance.post(urls.cardCar(), cardCar, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// получаем категории авто
export const getCategory = () => {
    return axiosInstance.get(urls.categoryId())
}