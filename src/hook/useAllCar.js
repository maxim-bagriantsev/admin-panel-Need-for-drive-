import {getAllCar} from "../api/api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useAllCar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getAllCar()
            .then(response => {
                dispatch({type: 'GET_ALL_CAR', payload: response.data.data})
            }).catch((err) => {
            console.log(err);
        });
    }, [])
}