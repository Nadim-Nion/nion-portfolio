import React from "react";

const AnimatedSubmitButton = ({ children = "Send Message" }) => {
  return (
    <button className="relative overflow-hidden w-full my-5 rounded-full border-2 border-purple-700 bg-purple-900 px-6 py-3 text-white font-bold transition-all duration-300 group">
      <span className="relative z-10 transition-all duration-500 group-hover:tracking-widest">
        {children}
      </span>
      {/* Sliding purple bar */}
      <span className="absolute top-0 left-0 h-full w-8 -rotate-45 bg-purple-400 opacity-60 translate-x-[-60px] group-hover:translate-x-[250px] transition-transform duration-500 delay-200"></span>
    </button>
  );
};

export default AnimatedSubmitButton;
