import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const [job,setJob] = useState(null);
    const id = useLoaderData();
    useEffect(() => {
        fetch('/public/Data.json')
        .then(res => res.json())
        .then(data => {
            const job = data.find(item => item.id == id)
            setJob(job);
        })
    },[]);
    console.log(job);
    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;