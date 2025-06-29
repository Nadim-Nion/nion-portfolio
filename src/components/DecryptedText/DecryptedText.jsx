import React, { useState, useEffect, useRef, useCallback } from "react";

const DecryptedText = () => {
  const [text] = useState("Nadim Mahmud Nion");
  const [letterStates, setLetterStates] = useState([]);
  const intervalRef = useRef(null);

  // Initialize letter states
  useEffect(() => {
    const letters = text.split("");
    setLetterStates(letters.map(() => 0)); // 0 = transparent, 1 = line, 2 = block, 3 = visible
  }, [text]);

  // Shuffle array function
  const shuffle = (array) => {
    const newArray = [...array];
    let currentIndex = newArray.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
    return newArray;
  };

  // Decode animation function
  const decodeText = useCallback(() => {
    // Reset all states
    setLetterStates((prev) => prev.map(() => 0));

    // Create shuffled sequence
    const indices = Array.from({ length: text.length }, (_, i) => i);
    const shuffled = shuffle(indices);

    // Animate each letter with random timing
    shuffled.forEach((index) => {
      if (text[index] === " ") return; // Skip spaces

      const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;

      setTimeout(() => {
        setLetterStates((prev) => {
          const newStates = [...prev];
          newStates[index] = 1;
          return newStates;
        });

        setTimeout(() => {
          setLetterStates((prev) => {
            const newStates = [...prev];
            newStates[index] = 2;
            return newStates;
          });

          setTimeout(() => {
            setLetterStates((prev) => {
              const newStates = [...prev];
              newStates[index] = 3;
              return newStates;
            });
          }, 100);
        }, 100);
      }, state1Time);
    });
  }, [text]);

  // Auto-decode every 10 seconds
  useEffect(() => {
    decodeText(); // Initial decode
    intervalRef.current = setInterval(decodeText, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, decodeText]);

  // Get letter styling based on state
  const getLetterStyle = (state, char) => {
    const baseClasses = "inline-block relative uppercase font-mono";

    if (char === " ") {
      return `${baseClasses} w-3`; // Space width
    }

    switch (state) {
      case 0: // Transparent
        return `${baseClasses} text-transparent`;
      case 1: // Line state
        return `${baseClasses} text-transparent after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-px after:h-6 after:bg-slate-800 after:transform after:-translate-x-1/2 after:-translate-y-1/2`;
      case 2: // Block state
        return `${baseClasses} text-transparent after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-4 after:h-6 after:bg-slate-800 after:transform after:-translate-x-1/2 after:-translate-y-1/2`;
      case 3: // Visible
        return `${baseClasses} text-white`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className=" flex relative font-mono">
      {/* Decode Text */}
      <div className="text-left">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={getLetterStyle(letterStates[index], char)}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecryptedText;
