import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/HomePage/Home/Home';
import MainLayout from '../layouts/MainLayout';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Project from '../components/Project/Project';

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
            },
            {
                path: '/projects',
                element: <Project></Project>
            }
        ]
    },
]);

export default router;