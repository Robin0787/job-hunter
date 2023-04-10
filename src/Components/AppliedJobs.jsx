import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import locationIcon from '../assets/Icons/Frame-4.png';
import frame from '../assets/Icons/Frame.png';
import Navbar from './Navbar/Navbar';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();

    return (
        <section>
            <article className='bg-[url("/public/vector.png")] bg-repeat-space bg-bottom bg-indigo-50 bg-clip-content'>
            <Navbar />
            <h2 className="text-2xl font-semibold text-center pt-2 pb-10">Applied Jobs</h2>
            </article>
            <article className='w-[80%] mx-auto my-10 space-y-5'>
            {
                appliedJobs ?
                appliedJobs.map(job => <SingleJob key={job.id} job={job}/>)
                :
                <div>

                </div>
            }
            </article>
        </section>
    );
};

function SingleJob ({job}) {
    const {id, companyLogo, companyName, jobTitle, fulltimeOrPartTime, remoteOrOnsite, location, salary} = job;
    return (
        <div className='border rounded-md p-6  flex flex-col md:flex-row justify-between items-center'>
            <article className='flex flex-col md:flex-row items-center gap-5 text-center md:text-left'>
            <img src={companyLogo} className="bg-gray-100 py-16 px-6 w-60 rounded-md" />
            <div>
            <h2 className="text-xl text-black font-semibold mt-2">{jobTitle}</h2>
            <h2 className="text-md text-gray-600 mb-3">{companyName}</h2>
            <div className='space-x-2 font-semibold mt-2'>
            <button className='text-indigo-500 border text-xs border-indigo-400 px-3 py-1 rounded-sm'>{remoteOrOnsite}</button>
            <button className='text-indigo-500 border text-xs border-indigo-400 px-3 py-1 rounded-sm'>{fulltimeOrPartTime}</button>
            </div>
            <div className='flex flex-col lg:flex-row justify-start lg:items-center gap-4 text-xs my-4 text-gray-600'>
                <div className='flex items-center gap-1'>
                    <img src={locationIcon} className='h-4 w-4' />
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={frame} className='h-4 w-4' />
                    <p>Salary : {salary}</p>
                </div>
            </div>
            </div>
            </article>
            <Link to={`/job/${id}`} className='inline-block text-sm md:text-md font-semibold text-white py-3 px-4 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-center'>View Details</Link>
        </div>
    );
}

export default AppliedJobs;