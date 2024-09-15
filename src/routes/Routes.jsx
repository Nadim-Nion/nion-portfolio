import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/HomePage/Home/Home';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;