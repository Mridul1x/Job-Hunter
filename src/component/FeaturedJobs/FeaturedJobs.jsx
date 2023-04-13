import React from "react";

const FeaturedJobs = ({ job }) => {
  const {
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
  return (
    <div className="border md:w-[648px] p-8">
      <img src={companyLogo} alt="" />
      <h1 className="mt-8">{jobTitle}</h1>
      <p className="mt-2">{companyName}</p>
      <div className="flex mt-2">
        <p className="border px-4 py-2 rounded-xl">{remoteOrOnsite}</p>
        <p className="border px-4 py-2 rounded-xl ms-3">{fulltimeOrParttime}</p>
      </div>
      <div className="flex mt-2">
        <img className="me-1" src={locationIcon} alt="" />
        {location}
        <img className="me-1 ms-3" src={salaryIcon} alt="" />
        {salary}
      </div>
      <button>View Details</button>
    </div>
  );
};

export default FeaturedJobs;
