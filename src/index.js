import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
const AppBundle = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

// ensures the website can dynamically respond to the user (Javascript)
ReactDOM.hydrate(<AppBundle />, document.getElementById('root'));