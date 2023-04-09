import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAllJob } from '../Utility/utilities';

const JobDetails = () => {
    const id = useLoaderData();
    let job = null;
    useEffect(() => {
        const allJob =  getAllJob();
        job = allJob.find(job => job.id === id);
        console.log(job)
    },[])
    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;