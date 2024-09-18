import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { name, description, image, client, server, live } = project;
    return (
        <div className="card card-compact bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-96 shadow-xl shadow-gray-700">
            <figure>
                <img
                    src={image}
                    alt={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{name} - {description}</h2>
                <div className="card-actions justify-evenly">
                    <Link to={client}>
                        <span className="link bg-black text-white border-0 text-lg">Client</span>
                    </Link>
                    <Link to={server}>
                        <span className="link bg-black text-white border-0 text-lg">Server</span>
                    </Link>
                    <Link to={live}>
                        <span className="link bg-black text-white border-0 text-lg">Live</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;