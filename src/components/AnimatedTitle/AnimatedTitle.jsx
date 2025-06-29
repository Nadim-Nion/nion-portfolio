import React, { useEffect, useRef } from "react";

const titles = [
  "Front-End Developer",
  "Back-End Developer",
  "MERN Stack Developer",
];

const AnimatedTitle = () => {
  const wordsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const words = wordsRef.current;
    let index = 0;

    const interval = setInterval(() => {
      words.forEach((word, i) => {
        word.style.opacity = i === index ? 1 : 0;
      });
      index = (index + 1) % words.length;
    }, 3000); // switch every 3s

    return () => clearInterval(interval);
  }, []);

  const handleClick = (i) => {
    const word = wordsRef.current[i];
    word.classList.add("scale-110");
    setTimeout(() => {
      word.classList.remove("scale-110");
    }, 200);
  };

  const handleDoubleClick = () => {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✨";
    sparkle.className = "absolute animate-ping text-purple-500";
    sparkle.style.left = `${Math.random() * 90}%`;
    sparkle.style.top = `${Math.random() * 60}%`;
    containerRef.current.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  };

  return (
    <div
      className="relative text-3xl font-bold text-left"
      onDoubleClick={handleDoubleClick}
      ref={containerRef}
    >
      <h3 className="inline-block text-white dark:text-white ml-14 md:ml-0">
        I am
        <span className="ml-0 md:ml-3 relative inline-block w-[380px] h-[2.5rem] align-middle overflow-hidden">
          {titles.map((title, i) => (
            <div
              key={i}
              ref={(el) => (wordsRef.current[i] = el)}
              onClick={() => handleClick(i)}
              className={`absolute left-0 top-0 w-full text-purple-700 transition-opacity duration-700 ease-in-out cursor-pointer opacity-0 ml-0`}
            >
              {title}
            </div>
          ))}
        </span>
      </h3>
    </div>
  );
};

export default AnimatedTitle;
