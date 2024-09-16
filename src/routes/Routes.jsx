import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/HomePage/Home/Home';
import MainLayout from '../layouts/MainLayout';
import About from '../components/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;