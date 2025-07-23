import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <footer>This is footer</footer>

        </div>
    );
}

export default Layout;