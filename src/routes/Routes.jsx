import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/HomePage/Home/Home';
import MainLayout from '../layouts/MainLayout';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Project from '../components/Project/Project';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';

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
                path: 'about',
                element: <About></About>
            },
            {
                path: 'skill',
                element: <Skill></Skill>
            },
            {
                path: 'projects',
                element: <Project></Project>
            },
            {
                path: 'education',
                element: <Education></Education>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;