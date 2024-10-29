import React from "react";
import cover from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-10">
      <div>
        <h1 className="text-4xl text-bold">
          One step
          <br />
          Closer To Your
          <br />
           <span className="text-#7E90FE">Dream Job</span>
        </h1>
        <p  className="py-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn bg-[#7E90FE]">Get Started</button>
      </div>
      <div>
        <img src={cover} alt="cover" />
      </div>
    </div>
  );
};

export default Banner;
