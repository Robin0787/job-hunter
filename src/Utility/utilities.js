import toast from 'react-hot-toast';


function storeToDB (job) {
    const appliedJobs = getJobFromDB();
    const isExists = appliedJobs.find(item => item.id === job.id);
    if(!isExists) {
        appliedJobs.push(job);
        toast.success('Job Applied || 👍');
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }else {
        toast.error('Already Applied');
    }
}

function getJobFromDB () {
    let allJobs = [];

    const foundJobs = localStorage.getItem('applied-jobs');
    if(foundJobs) {
        allJobs = JSON.parse(foundJobs);
    }
    return allJobs;
}

export { storeToDB, getJobFromDB };

