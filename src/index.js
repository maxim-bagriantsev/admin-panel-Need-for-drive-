import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const {dispatch} = store

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

