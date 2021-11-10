import {getAllOrder} from "../api/api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useAllOrder = () => {

    // const dispatch = useDispatch()
    //
    // const access_token = JSON.parse(localStorage.getItem('access_token'))
    //
    // useEffect(() => {
    //
    //     getAllOrder(access_token)
    //         .then(response => {
    //             dispatch({type: 'GET_ALL_ORDER', payload: response.data})
    //         }).catch((err) => {
    //         console.log(err);
    //     });
    // }, [])
}