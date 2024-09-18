import React from 'react';
import About from '../../../components/About/About';
import Skill from '../../../components/Skill/Skill';
import Project from '../../../components/Project/Project';

const Home = () => {
    return (
        <div>
            {/* <div>
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div> */}
            <About></About>
            <Skill></Skill>
            <Project></Project>
        </div>
    );
};

export default Home;