import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HelmetProvider } from 'react-helmet-async';


import HomeRoutes from './routes/HomeRoutes/HomeRoutes.js';
import AdminRoutes from './routes/AdminRoutes/AdminRoutes.js';


function App() {

    const helmetContext = {
    title: 'Home',
    description: 'This is the Home description',
    keywords: 'crane, training, professional',
};

    return (
        <HelmetProvider context={helmetContext}>
            <Routes>
                <Route path="/*" element={<HomeRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
            </Routes>
            <ToastContainer />
        </HelmetProvider>
    );
}

export default App;
