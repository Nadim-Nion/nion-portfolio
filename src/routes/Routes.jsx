import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/HomePage/Home/Home';
import MainLayout from '../layouts/MainLayout';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            }
        ]
    },
]);

export default router;