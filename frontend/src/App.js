import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style/Global.module.css';

import Painel from './pages/Painel';
import Dashboard from './pages/Dashboard';


export default props => {
    return (
        <BrowserRouter>
            {/* <Painel /> */}
            <Dashboard />
        </BrowserRouter>
    )
};