// AnimatedButton.jsx
import React from "react";

const AnimatedButton = ({ text = "Download Resume", downloadLink }) => {
  return (
    <a
      href={downloadLink}
      download
      className="relative inline-block px-8 py-5 text-white uppercase font-semibold tracking-widest overflow-hidden transition-all duration-500 hover:bg-white hover:text-black shadow-none hover:shadow-[0_0_5px_#fff,0_0_25px_#fff,0_0_50px_#fff,0_0_200px_#fff]"
    >
      <span className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-transparent to-white animate-slide-left"></span>
      <span className="absolute -top-full right-0 w-[10px] h-full bg-gradient-to-b from-transparent to-white animate-slide-down delay-75"></span>
      <span className="absolute bottom-0 right-0 w-full h-[10px] bg-gradient-to-l from-transparent to-white animate-slide-right delay-150"></span>
      <span className="absolute -bottom-full left-0 w-[10px] h-full bg-gradient-to-t from-transparent to-white animate-slide-up delay-300"></span>
      {text}
    </a>
  );
};

export default AnimatedButton;
