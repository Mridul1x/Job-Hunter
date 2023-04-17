import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  const navigate = useNavigate();

  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
    locationIcon,
    salaryIcon,
  } = job;

  const handleViewDetails = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="border md:w-[648px] p-8">
      <img src={companyLogo} alt="" />
      <h1 className="mt-8 font-bold text-2xl">{jobTitle}</h1>
      <p className="mt-2 text-xl text-stone-600">{companyName}</p>
      <div className="flex mt-2">
        <p className="border border-indigo-500 font-bold px-4 py-2 rounded text-indigo-500">
          {remoteOrOnsite}
        </p>
        <p className="border border-indigo-500 font-bold px-4 py-2 rounded ms-3 text-indigo-500">
          {fulltimeOrParttime}
        </p>
      </div>
      <div className="flex mt-5">
        <img className="me-1" src={locationIcon} alt="" />
        {location}
        <img className="me-1 ms-3" src={salaryIcon} alt="" />
        {salary}
      </div>
      <button onClick={handleViewDetails} className="btn btn-primary mt-5 font-bold text-white">
        View Details
      </button>
    </div>
  );
};

export default FeaturedJobs;
