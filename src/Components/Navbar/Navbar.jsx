import { AcademicCapIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavbarCSS.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='relative flex justify-between items-center py-6 '>
            <Link to={'/'} className='flex justify-center items-center gap-2 animate-text bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-black'>
                <AcademicCapIcon className='h-8 w-8 text-blue-500' />
                <h2 className="text-2xl font-semibold">Your Jobs</h2>
            </Link>
            <div className='hidden lg:flex flex-col md:flex-row text-gray-500 justify-center items-center gap-5 py-4 md:py-6 lg:py-0'>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'}>Home</NavLink>
                <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'}>Statistics</NavLink>
                <NavLink to={'/applied-jobs'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'}>Applied Jobs</NavLink>
                <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'}>Blog</NavLink>
            </div>
            <div className='hidden lg:block'>
                <Link to={'/'} className='text-sm md:text-md font-semibold text-white p-3 rounded-md bg-gradient-to-r from-indigo-500  to-purple-600'>Start Applying</Link>
            </div>
            <Bars3Icon className='block lg:hidden h-6 w-6' onClick={() => {setIsOpen(true)}}/>
            {
                isOpen
                &&
                <div className="absolute top-2 z-10 shadow-lg rounded-md bg-white w-full py-4">
                    <div className="flex justify-between items-center">
                    <Link to={'/'} className='flex justify-center items-center gap-2 animate-text bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-black' onClick={() => {setIsOpen(false)}}>
                        <AcademicCapIcon className='h-8 w-8 text-blue-500' />
                        <h2 className="text-2xl font-semibold">Your Jobs</h2>
                    </Link>
                    <XMarkIcon className='block lg:hidden h-6 w-6' onClick={() => {setIsOpen(false)}}/>
                    </div>
                    <div className='text-gray-500 py-4 md:py-6 space-y-2 flex flex-col justify-center items-center'>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'} onClick={() => {setIsOpen(false)}}>Home</NavLink>
                        <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'} onClick={() => {setIsOpen(false)}}>Statistics</NavLink>
                        <NavLink to={'/applied-jobs'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'} onClick={() => {setIsOpen(false)}}>Applied Jobs</NavLink>
                        <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'active p-1' : 'p-1'} onClick={() => {setIsOpen(false)}}>Blog</NavLink>
                    </div>
                    <div className='text-center mb-2'>
                        <Link to={'/'} className='text-sm md:text-md font-semibold text-white p-3 rounded-md bg-gradient-to-r from-indigo-500  to-purple-600' onClick={() => {setIsOpen(false)}}>Start Applying</Link>
                    </div>
                </div>
            }
        </nav>
    );
};

export default Navbar;