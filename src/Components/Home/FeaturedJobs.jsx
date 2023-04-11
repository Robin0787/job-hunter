import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/Data.json');
            const data = await res.json();
            setJobs(data);
        }
        fetchData();
    }, []);
    return (
        <section className='my-16'>
            <article>
                <h1 className='text-center text-4xl md:text-5xl font-semibold'>Featured Jobs</h1>
                <p className="text-sm md:text-md text-gray-500 text-center mt-4 mb-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    showAll 
                    ?
                    jobs.slice(0,4).map(job => <SingleJob key={job.id} job={job} />) 
                    : 
                    jobs.map(job => <SingleJob key={job.id} job={job} />) 
                }
            </article>
            <article className='my-6 text-center'>
                <button className='inline-block text-md md:text-md font-semibold text-white py-2 px-8 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-center'
                onClick={() => {setShowAll(!showAll)}}
                >{showAll ? 'Show All' : 'Show Less'}</button>
            </article>
        </section>
    );
};


export default FeaturedJobs;