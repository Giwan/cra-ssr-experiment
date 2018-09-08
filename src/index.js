import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// esures the website can dynamically respond to the user (Javascript)
ReactDOM.hydrate(<App />, document.getElementById('root'));