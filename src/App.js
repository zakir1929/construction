import React from 'react';

import { Routes, Route } from 'react-router-dom';


// Home Routes
import HomeLayout from './layouts/HomeLayout/HomeLayout.js';
import Home from './pages/Home/Home.js';
import AboutUs from './pages/AboutUs/AboutUs.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import ProductDetail from './pages/ProductDetail/ProductDetail.js';


// Admin Routes
import AdminLayout from './layouts/AdminLayout/AdminLayout.js';
import Dashboard from './pages/Admin/Dashboard/Dashboard.js';
import NotFound from './partials/NotFound/NotFound.js';


function App() {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/product-detail" element={<ProductDetail />} />
            </Route>

            <Route element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/*" element={<NotFound />} /> 
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
