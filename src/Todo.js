import { useState } from 'react';
export default function Todo() {
    const [job,setJob] = useState('')
    const [jobs, setJobs] = useState([])

    console.log(job);
    
    return(
        <div style={{ padding: 32}}>
            <input 
            value={job}
            onChange = {e =>setJob(e.target.value)}/>
            <button>Add</button>

            <ul>
                {jobs.map((job, index) => 
                (<li key={index}>{job}</li>))}
            </ul>
        </div>
    )
}
