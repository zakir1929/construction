import React from 'react';

import { Routes, Route } from 'react-router-dom';


import HomeRoutes from './routes/HomeRoutes/HomeRoutes.js';
import AdminRoutes from './routes/AdminRoutes/AdminRoutes.js';


function App() {
    return (
        <Routes>
            <Route path="/*" element={<HomeRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    );
}

export default App;
