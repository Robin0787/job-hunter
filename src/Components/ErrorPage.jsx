import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh] gap-6'>
            <h2 className='text-3xl font-thin text-indigo-500'><span className='text-red-500'>404</span> || Page Not Found</h2>
            <Link to={'/'} className='text-sm border duration-1000 border-indigo-400 md:text-md font-semibold text-black py-3 px-6 rounded-md hover:bg-gradient-to-r from-indigo-400  to-purple-500'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;