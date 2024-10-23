import React from 'react';

import { Outlet } from 'react-router-dom';

import { Routes, Route, Link } from 'react-router-dom';

import Header from '../../partials/Header/Header.js';
import Footer from '../../partials/Footer/Footer.js';
import ScrollTop from '../../partials/ScrollTop/ScrollTop.js';

import Home from '../../pages/Home/Home.js';
import AboutUs from '../../pages/AboutUs/AboutUs.js';
import ContactUs from '../../pages/ContactUs/ContactUs.js';
import ProductDetail from '../../pages/ProductDetail/ProductDetail.js';
import Division from '../../pages/Division/Division.js';
import Demo from '../../pages/Demo/Demo.js';

import PageHeader from '../../partials/PageHeader/PageHeader.js'

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

<div className="container">
  <section className="http-error">
    <div className="row justify-content-center py-3">
      <div className="col-md-12 text-center">
        <div className="http-error-main">
          <h2>404!</h2>
          <p>We're sorry, but the page you were looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary btn-rounded text-3" > Back To Home </Link>
        </div>
      </div>
    </div>
  </section>
</div>

    </React.Fragment>
  );
};

const CMSRedirect = () => {
    window.location.href = "https://cms.bureaulinkglobal.com";
    return null; 
};

function HomeRoutes(){
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cms" element={<CMSRedirect />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/division/:slug" element={<Division />} />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    );
}

export default HomeRoutes;
