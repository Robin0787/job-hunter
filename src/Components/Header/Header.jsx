import React from 'react';
import img from "../../assets/All Images/author.png";
const Header = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center py-6 gap-5'>
            <div className='w-full md:w-1/2 space-y-3 lg:space-y-6 text-center lg:text-left'>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold lg:leading-snug">Get Closer To Your <br /> <span className='text-cyan-500'>Dream Job</span></h1>
                <p className="text-sm md:text-md w-[80%] mx-auto lg:mx-0 text-center lg:text-justify">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='text-sm md:text-lg font-semibold text-white py-3 px-5 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 '>Get Started</button>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={img} className='w-full h-full' />
            </div>
        </div>
    );
};

export default Header;