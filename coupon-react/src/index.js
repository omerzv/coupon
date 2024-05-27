
import axios from "axios";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

import './index.css';
import {store} from "./Redux/store"



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);