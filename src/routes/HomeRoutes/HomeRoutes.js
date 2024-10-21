import React from 'react';

import { Outlet } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import Header from '../../partials/Header/Header.js';
import Footer from '../../partials/Footer/Footer.js';
import ScrollTop from '../../partials/ScrollTop/ScrollTop.js';

import Home from '../../pages/Home/Home.js';
import AboutUs from '../../pages/AboutUs/AboutUs.js';
import ContactUs from '../../pages/ContactUs/ContactUs.js';
import ProductDetail from '../../pages/ProductDetail/ProductDetail.js';
import Division from '../../pages/Division/Division.js';

function HomeLayout(){
    return (
        <div>
            <Header />
            <main>
                <Outlet />  {/* Render child routes here */}
            </main>
            <Footer />            
            <ScrollTop />
        </div>
    );
}

const NotFound = props => {
  return (
    <React.Fragment>
        Page is not found
    </React.Fragment>
  );
};

function HomeRoutes(){
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path="/division/:slug" element={<Division />} />

                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    );
}

export default HomeRoutes;
