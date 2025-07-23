import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../routes';

function AppRoutes(props) {

    const element = useRoutes(routes)

    return element;
}

export default AppRoutes;