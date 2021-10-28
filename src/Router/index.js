import React from 'react';
import {Route, Switch} from "react-router-dom";
import {LoginPanel} from "../LoginPanel";
import {Main} from "../Main";
import {useSelector} from "react-redux";


export const StepRouter = () => {

    const {
        isAuthorised,
    } = useSelector((state) => {
        return state.reducerData
    })

    if (isAuthorised === true) {
        return <Route path="/main/carSetting" component={Main}/>
    }

    if (isAuthorised === false) {
        return <Route path="/" component={LoginPanel} exact/>
    }

    return (
        <Switch>
            <Route path="/" component={LoginPanel} exact/>
            <Route path="/main/carSetting" component={Main}/>
        </Switch>
    );
};