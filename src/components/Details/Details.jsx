import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveApplicationToStorage } from "../utility/localStorage";

const Details = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const { jobId } = useParams();
  const idInt = parseInt(jobId);
  // console.log(jobId.jobId)
  const viewDetails = jobs.find((job) => job.id == jobId);
//   console.log(viewDetails);
  const {
    job_description,
    job_responsibility,
    job_title,
    company_name,
    job_type,
    location,
    salary,
  } = viewDetails;

  const handleApplied = () => {
    toast("Applied Job Successfully");
    saveApplicationToStorage(idInt);
  };
  return (
    <div>
      <h2>Job Details of :{jobId}</h2>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="md:col-span-3">
          <p>
            <span className="text-xl font-bold">Job Description</span> :{" "}
            {job_description}
          </p>
          <p>
            <span className="text-xl font-bold">Job Responsibility</span> :{" "}
            {job_responsibility}
          </p>
        </div>
        <div className="border md:col-span-1 p-4">
          <h3 className="text-xl font-bold">Job Details</h3>
          <div className="space-y-4">
            <p>Salary : {salary}</p>
            <p>Job Title : {job_title}</p>
            <h4>Contact Information</h4>
            <p>Phone</p>
            <p>Email</p>
            <p>Address</p>
          </div>
          <div className="text-center">
            <button onClick={handleApplied} className="btn">
              Apply now
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Details;
