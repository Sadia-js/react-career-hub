import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/localStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const [application, setApplication] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const storedJobs = getStoredApplication();
  //   console.log(storedJobs);
  const jobs = useLoaderData();
  //   console.log(jobs);
  useEffect(() => {
    if (jobs.length) {
      const applied = jobs.filter((job) => storedJobs.includes(job.id));
      console.log(applied);
      setApplication(applied);
      //  const totalApplied = [];
      //  for(const id of storedJobs){
      //     // console.log(id);
      //     const submitted = jobs.find(job => job.id === id);
      //     if(submitted){
      //         totalApplied.push(submitted);
      //     }
      // }
      // console.log(totalApplied);
    }
  }, [jobs]);

  const handleFilter = (filter) => {
    if(filter === "all"){
        setDisplayJobs(application);
    }
    else if(filter === "remote"){
        const remoteJobs = application.filter(applied => applied.remote_or_onsite === "Remote");
        setDisplayJobs(remoteJobs)
    }
    else if(filter === "onsite"){
        const onsiteJobs = application.filter(applied => applied.remote_or_onsite === "Onsite");
        setDisplayJobs(onsiteJobs)
    }

  }
  return (
    <div>
      <h2>Applied jobs: {application.length}</h2>
      <div className="text-end">
        <details className="dropdown my-10">
          <summary className="btn m-1">Filter by</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
            <li>  <a onClick={()=>handleFilter('all')}>All</a>
            </li>
            <li>
              <a onClick={()=>handleFilter('remote')}>Remote</a>
            </li>
            <li>
              <a onClick={()=>handleFilter('onsite')}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="space-y-4">
        {displayJobs.map((j) => (
          <div key={j.id} className="flex flex-col gap-3 border rounded-lg p-4">
            <img className="w-16" src={j.logo} alt="" />
            <h2>{j.job_title}</h2>
            <p>{j.company_name}</p>
            <p className="flex justify-between">
              <span>{j.remote_or_onsite}</span>
              <button>View Details</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
