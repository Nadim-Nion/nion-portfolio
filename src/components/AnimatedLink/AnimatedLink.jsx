import React from "react";
import { Link } from "react-router-dom";

const AnimatedLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="group relative inline-block text-white uppercase transition-colors duration-300 hover:text-purple-700"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-purple-700 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
    </Link>
  );
};

export default AnimatedLink;
