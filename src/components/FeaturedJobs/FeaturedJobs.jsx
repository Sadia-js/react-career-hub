import axios from "axios";
import { useEffect, useState } from "react";
import FJob from "../FJob/FJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const[details, setDetails] = useState([]);
  // this is not the best way to load data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    axios.get("jobs.json").then((data) => {
      console.log(data.data)
      setJobs(data.data)
    });
  }, []);
  // handle view details
  const handleDetails = (jobId) => {
    const user = jobs.find(user => user.id === jobId);
    console.log(jobId, user);
    setDetails(user);
  }


  return (
    <div className="mt-10 space-y-2">
      <h1 className="text-4xl font-bold text-center">Featured Jobs</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-6 py-10">
        {jobs.slice(0, dataLength).map((job, idx) => (
          <FJob key={idx} job={job} handleDetails={handleDetails} details={details}></FJob>
        ))}
      </div>
      <div className='text-center pb-10'>
        <button
          onClick={() => {dataLength===4 ? setDataLength(jobs.length) : setDataLength(4)}}
          className="btn bg-[#7E90FE]"
        >
           {dataLength===jobs.length ? 'Show less' : 'Show more details'}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
