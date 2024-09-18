import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, []);

    return (
        <div className='max-w-7xl mx-auto p-7 mb-10'>
            <h2 className='text-5xl font-bold text-white text-center'>Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Project;