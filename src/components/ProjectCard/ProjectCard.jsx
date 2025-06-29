import React from "react";
import AnimatedLink from "../AnimatedLink/AnimatedLink";

const ProjectCard = ({ project }) => {
  const { name, description, image, client, server, live } = project;

  return (
    <div className="flex justify-center items-center">
      <div className="relative group/card transition-all duration-500 w-[280px] h-[340px] sm:w-[300px] md:w-[360px] hover:z-20">
        {/* Card Wrapper */}
        <div
          className="
        relative dark:bg-neutral-950 p-4 rounded-xl overflow-hidden
        shadow-xl hover:shadow-2xl shadow-gray-700
        group-hover:blur-sm group-hover:scale-90 group-hover:brightness-75
        group-hover/card:!scale-105 group-hover/card:!blur-none group-hover/card:!brightness-100
        transition-all duration-500 ease-in-out
      "
        >
          <img
            src={image}
            alt={name}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-lg font-bold text-white mb-2">{name}</h2>
          <p className="text-sm text-gray-300">{description}</p>
          <div className="flex justify-between items-center mt-4 text-white text-sm">
            {/* <Link
            to={client}
            className="hover:text-purple-700 transition-colors"
          >
            Client
          </Link>
          <Link
            to={server}
            className="hover:text-purple-700 transition-colors"
          >
            Server
          </Link>
          <Link to={live} className="hover:text-purple-700 transition-colors">
            Live
          </Link> */}
            <AnimatedLink to={client}>Client</AnimatedLink>
            <AnimatedLink to={server}>Server</AnimatedLink>
            <AnimatedLink to={live}>Live</AnimatedLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
