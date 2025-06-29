import React from "react";
import img from "../../assets/image/My-Formal-Picture.JPG";
import resume from "../../assets/pdf/resume.pdf";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import DecryptedText from "../DecryptedText/DecryptedText";

const About = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto p-7">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 p-7">
        {/* About Content */}
        <div className="text-white space-y-6 my-0 md:my-14 lg:w-1/2 mt-10">
          <h2 className="text-4xl mx-12 md:mx-0 md:text-5xl font-bold">
            Hi, This is <br />
            {/* <span>Nadim Mahmud Nion</span> */}
            <DecryptedText></DecryptedText>
          </h2>
          <AnimatedTitle></AnimatedTitle>
          <p className="mx-12 md:mx-0">
            I’m a Junior Front-End Developer with a focus on the MERN stack,
            skilled in React.js, TypeScript, Node.js, Express.js, MongoDB,
            Mongoose, JWT, and RESTful APIs. I’m passionate about building
            responsive, user-friendly web applications and eager to contribute
            to collaborative teams while growing as a full-stack developer.
          </p>
          <AnimatedButton downloadLink={resume}></AnimatedButton>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src={img}
            alt="Nion's Image"
            className="w-40 h-40 lg:w-80 lg:h-96 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
