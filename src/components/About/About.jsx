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
                    <h3 className='text-3xl text-purple-700 font-bold'>I am a Front-End Developer</h3>
                    <p>I am a passionate and detail-oriented Junior Front-End Developer specializing in the MERN stack. I thrive on building responsive, user-friendly web applications with modern JavaScript frameworks like React, ensuring seamless user experiences. With hands-on experience in React.js, Node.js, MongoDB, Express, and RESTful APIs, I am eager to contribute innovative solutions to complex problems. I am driven by a strong learning mindset, collaborative work ethic, and the ability to quickly adapt to new challenges. I am looking to join a dynamic team where I can apply my skills and continue to grow as a developer.</p>
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