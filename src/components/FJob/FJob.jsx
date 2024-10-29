import { MdLocationOn,  MdOutlineCurrencyExchange } from "react-icons/md";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const FJob = ({ job, details }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, 
        salary} = job;
        const navigate = useNavigate();
      
    const handleDetails = () => {
      navigate(`/job/${id}`);
    }
  return (
    <div className="flex flex-col gap-2 border pt-8 rounded-xl">
      <figure className="px-8">
        <img
          src={logo}
          alt="company_logo"
        />
      </figure>
      <div className="flex-grow flex flex-col gap-6 p-8">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <p className="space-x-2">
            <button className="btn">{remote_or_onsite}</button>
            <button className="btn">{job_type}</button>
        </p>
        <div className="flex-grow flex flex-col items-center md:flex-row gap-4">
            <p className="flex gap-1 items-center"><MdLocationOn className="text-l" />{location}</p>
            <p className="flex gap-1 items-center"><MdOutlineCurrencyExchange className="text-base"/> Salary : {salary}</p>
        </div>
        <div className="mb-5">
          <button onClick={handleDetails} className="btn bg-[#7E90FE]">View Details</button>
        </div>
      </div>
    </div>
  );
};

FJob.propTypes = {
    job: PropTypes.object.isRequired,
}

export default FJob;
