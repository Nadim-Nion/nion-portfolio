import React, { useState, useEffect } from "react";

const TextPopAnimationDemo = ({
  text = "",
  fontSize = "text-5xl",
  textColor = "text-white",
  centered = true,
  autoReplay = true,
  replayDelay = 3000,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation on mount and optionally replay
  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      // Reset animation after all letters are done
      const totalDuration = text.length * 100 + 800; // 100ms delay per letter + 800ms for animation
      setTimeout(() => setIsAnimating(false), totalDuration);
    };

    startAnimation();

    if (autoReplay) {
      const interval = setInterval(startAnimation, replayDelay);
      return () => clearInterval(interval);
    }
  }, [text, autoReplay, replayDelay]);

  return (
    <div
      className={`font-bold tracking-widest select-none ${
        centered ? "text-center" : "text-left"
      }`}
    >
      <div className={`${fontSize} ${textColor} inline-block`}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-400 ease-in-out ${
              isAnimating ? "animate-pop" : ""
            }`}
            style={{
              animationDelay: isAnimating ? `${0.4 + index * 0.1}s` : "0s",
              animationFillMode: "both",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-pop {
          animation: pop 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

// Example usage component
const TextPopAnimation = ({ text }) => {
  return (
    <div className="flex items-center justify-center p-8 text-white">
      <div className="space-y-12">
        {/* Main Skills Header */}
        <TextPopAnimationDemo
          text={text}
          fontSize="text-5xl"
          textColor="text-white"
          centered={true}
          autoReplay={true}
          replayDelay={4000}
        />
      </div>
    </div>
  );
};

export default TextPopAnimation;
