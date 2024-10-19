import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../partials/Header/Header.js';
import Footer from '../../partials/Footer/Footer.js';
import ScrollTop from '../../partials/ScrollTop/ScrollTop.js';

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

export default HomeLayout;
