import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout(props) {
    return (
        <div>
      <p>This is secind layout</p>            
            <Outlet/>
        </div>
    );
}

export default AdminLayout;