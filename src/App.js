import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import HomeRoutes from './routes/HomeRoutes/HomeRoutes.js';
import AdminRoutes from './routes/AdminRoutes/AdminRoutes.js';


function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/*" element={<HomeRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
            </Routes>
            <ToastContainer />
        </React.Fragment>
    );
}

export default App;
