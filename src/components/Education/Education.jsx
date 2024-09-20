import React from 'react';
import img from '../../assets/image/diu.png';

const Education = () => {
    return (
        <div className='max-w-full lg:max-w-7xl mx-auto p-7 mb-10'>
            <h2 className='text-5xl font-bold text-white text-center'>Education</h2>
            <div className='border-2 border-gray-300 rounded-lg mt-7 p-8 md:p-12'>

                {/* University Info */}
                <div className='flex flex-col md:flex-row justify-start mb-8'>
                    <div className='flex justify-center items-center mb-4 md:mb-0'>
                        <img src={img} className='w-[60px] h-[60px]' alt="Daffodil International University" />
                    </div>
                    <div className='ml-7 text-white text-center md:text-left'>
                        <h3 className='text-2xl font-bold'>Daffodil International University</h3>
                        <h4 className='text-md'>BSc. in Computer Science and Engineering</h4>
                        <h5 className='text-sm'>January 6, 2018 - February 17, 2023</h5>
                    </div>
                </div>

                {/* My grades */}
                <div className='text-md text-white'>
                    <p> <span className='font-semibold'>Grade:</span> 3.59 out of 4.00</p>
                    <p className='mt-4'>I hold a BSc in Computer Science and Engineering from Daffodil International University, equipping me with a strong foundation in cutting-edge technology and innovative problem-solving skills.</p>
                </div>
            </div>
        </div>
    );
};

export default Education;