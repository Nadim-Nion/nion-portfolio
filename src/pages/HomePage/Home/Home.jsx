import React from 'react';
import About from '../../../components/About/About';
import Skill from '../../../components/Skill/Skill';
import Project from '../../../components/Project/Project';
import Education from '../../../components/Education/Education';
import Contact from '../../../components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;