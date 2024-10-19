import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <div>
            <header> 
                <nav>
                    <a href="/admin">Admin Dashboard</a>
                </nav>
            </header>
            <main>
                <Outlet />  {/* Render admin-specific child routes */}
            </main>
            <footer> © 2024 Admin</footer>
        </div>
    );
}

export default AdminLayout;
