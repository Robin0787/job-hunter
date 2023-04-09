import React from 'react';

const SingleJob = ({job}) => {
    const {companyLogo, companyName, jobTitle, fulltimeOrPartTime, remoteOrOnsite, location, salary} = job;
    console.log(job)
    return (
        <div className='border rounded-md p-6'>
            <img src={companyLogo} className="" />
            <h2 className="text-lg text-black font-semibold my-1">{jobTitle}</h2>
            <h2 className="text-md text-gray-600">{companyName}</h2>
            <div className='space-x-2 font-semibold mt-2'>
            <button className='text-indigo-600 border text-xs border-indigo-500 px-2 py-1 rounded-sm'>{remoteOrOnsite}</button>
            <button className='text-indigo-600 border text-xs border-indigo-500 px-2 py-1 rounded-sm'>{fulltimeOrPartTime}</button>
            </div>
        </div>
    );
};

export default SingleJob;