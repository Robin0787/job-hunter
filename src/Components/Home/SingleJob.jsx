import React from 'react';
import { Link } from 'react-router-dom';
import locationIcon from '../../assets/Icons/Frame-4.png';
import frame from '../../assets/Icons/Frame.png';
const SingleJob = ({job}) => {
    const {id, companyLogo, companyName, jobTitle, fulltimeOrPartTime, remoteOrOnsite, location, salary} = job;
    return (
        <div className='border rounded-md p-6 relative'>
            <img src={companyLogo} className="transform scale-75 relative -left-5 w-48" />
            <h2 className="text-xl text-black font-semibold mt-2">{jobTitle}</h2>
            <h2 className="text-md text-gray-600 mb-3">{companyName}</h2>
            <div className='space-x-2 font-semibold mt-2'>
            <button className='text-indigo-500 border text-xs border-indigo-400 px-3 py-1 rounded-sm'>{remoteOrOnsite}</button>
            <button className='text-indigo-500 border text-xs border-indigo-400 px-3 py-1 rounded-sm'>{fulltimeOrPartTime}</button>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center gap-4 text-xs my-4 text-gray-600'>
                <div className='flex items-center gap-1'>
                    <img src={locationIcon} className='h-4 w-4' />
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={frame} className='h-4 w-4' />
                    <p>Salary : {salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`} className='inline-block text-sm md:text-md font-semibold text-white py-1 px-2 rounded-sm bg-gradient-to-r from-purple-600 to-indigo-500 '>View Details</Link>
        </div>
    );
};

export default SingleJob;