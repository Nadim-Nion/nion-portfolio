import React from 'react';
import img from '../../assets/image/My-Formal-Picture.JPG';
import resume from '../../assets/pdf/resume.pdf';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto p-7'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-10 p-7'>
                {/* About Content */}
                <div className='text-white space-y-6 my-14 lg:w-1/2'>
                    <h2 className='text-5xl font-bold'>Hi, This is <br />
                        <span>Nadim Mahmud Nion</span>
                    </h2>
                    <h3 className='text-3xl font-bold'>I am a
                        <span className='text-purple-700 ml-3'>Front-End Developer</span>
                    </h3>
                    <p>I am a passionate Junior Front-End Developer specializing in the MERN stack. I enjoy building responsive, user-friendly web applications using modern frameworks like React. With experience in React.js, Node.js, MongoDB, Express, and RESTful APIs, I am eager to contribute innovative solutions and tackle complex challenges. I bring a strong learning mindset, collaborative work ethic, and adaptability to any team, and look forward to growing as a developer.</p>
                    <a href={resume} download>
                        <button className="btn btn-active btn-primary my-4">Download Resume</button>
                    </a>
                </div>

                {/* Image */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img src={img} alt="Nion's Image" className='w-40 h-40 lg:w-80 lg:h-96 rounded-lg object-cover' />
                </div>
            </div>
        </div>
    );
};

export default About;