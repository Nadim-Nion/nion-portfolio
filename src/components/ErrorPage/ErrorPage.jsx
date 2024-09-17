import React from 'react';
import errorPage from '../../assets/image/error-page.jpg';

const ErrorPage = () => {
    return (
        <div id="error-page" className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='text-center my-32'>
                <h1 className='text-5xl font-bold md:text-6xl text-gray-800'>Oops!</h1>
                <p className='text-2xl md:text-3xl text-gray-600 mt-4'>Sorry, an unexpected error has occurred.</p>
            </div>
            <div>
                <img src={errorPage} className='h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-lg shadow-lg' alt="404 Page Not Found" />
            </div>
        </div>
    );
};

export default ErrorPage;