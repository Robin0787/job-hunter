import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import titleIcon from "../assets/Icons/Frame-1.png";
import locationIcon from "../assets/Icons/Frame-4.png";
import dollarIcon from "../assets/Icons/Frame.png";
import emailIcon from "../assets/Icons/email.png";
import phoneIcon from "../assets/Icons/phone.png";
const JobDetails = () => {
    const [job, setJob] = useState(null);
    const id = useLoaderData();
    useEffect(() => {
        fetch('/public/Data.json')
            .then(res => res.json())
            .then(data => {
                const job = data.find(item => item.id == id)
                setJob(job);
            })
    }, []);
    console.log(job);
    return (
        <section className='grid grid-cols-1 lg:grid-cols-fourTwo justify-center items-center gap-5  px-6 shadow-2xl my-6 rounded-lg py-5 lg:py-10 '>
            <article className='text-md text-gray-600 space-y-3 py-5 lg:py-0'>
                <h2 className="text-justify"><span className='font-semibold  text-black'>Job Description:</span> {job?.jobDescription}</h2>
                <h2 className="text-justify"><span className='font-semibold  text-black'>Job Responsibility:</span> {job?.jobResponsibility}</h2>
                <div className='space-y-2'>
                    <h2 className="font-semibold  text-black">Educational Requirements:</h2>
                    <h2>{job?.educationalRequirements}</h2>
                </div>
                <div className='space-y-2'>
                    <h2 className="font-semibold  text-black">Experiences:</h2>
                    <h2>{job?.experiences}</h2>
                </div>
            </article>
            <article className='space-y-4 py-4 lg:py-0'>
                <div className='bg-indigo-50 p-6 rounded-md space-y-4'>
                <h2 className="text-lg font-semibold">Job Details</h2>
                <hr className='border-gray-400 rounded-lg'/>
                <div className='flex items-center gap-2 text-gray-600'>
                    <img src={dollarIcon} className='h-4 w-4' />
                    <p><span className='text-black font-semibold'>Salary:</span> {job?.salary}</p>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                    <img src={titleIcon} className='h-4 w-4' />
                    <p><span className='text-black font-semibold'>Salary:</span> {job?.jobTitle}</p>
                </div>
                <h2 className="text-lg font-semibold">Contact Information</h2>
                <hr className='border-gray-400 rounded-lg '/>
                <div className='flex items-center gap-2 text-gray-600'>
                    <img src={phoneIcon} className='h-4 w-4' />
                    <p><span className='text-black font-semibold'>Phone:</span> {job?.contactInformation?.phone}</p>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                    <img src={emailIcon} className='h-4 w-4' />
                    <p><span className='text-black font-semibold'>Email:</span> {job?.contactInformation?.email}</p>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                    <img src={locationIcon} className='h-4 w-4' />
                    <p><span className='text-black font-semibold'>Address:</span> {job?.location}</p>
                </div>
                </div>
                <Link className='inline-block text-md font-semibold text-white py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 w-full text-center'>Apply Now</Link>
            </article>
        </section>
    );
};

export default JobDetails;