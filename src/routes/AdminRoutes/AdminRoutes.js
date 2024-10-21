import React from 'react';

import { Outlet } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import Dashboard from '../../pages/Admin/Dashboard/Dashboard.js';


function AdminLayout() {
    return (
        <div>
            <header> 
                This is My Header
            </header>
            <main>
                <Outlet />  {/* Render admin-specific child routes */}
            </main>
            <footer> This is My Footer <br/> © 2024 Admin</footer>
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


function AdminRoutes(){
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<Dashboard />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AdminRoutes;