import React from "react";


const AppliedJobsDetails = ({ job }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    locationIcon,
    salaryIcon,
    location,
    salary,
  } = job;
  return (
    <div>
    
      <div className="flex justify-between items-center border rounded my-6 p-6">
        <div className="info flex items-center">
          <img
            className="bg-fuchsia-200 px-10 py-24 w-48 rounded"
            src={companyLogo}
            alt=""
          />
          <div className="ms-6">
            <h1 className="text-2xl font-bold">{jobTitle}</h1>
            <h1 className="text-xl font-semibold text-gray-500 mt-2">
              {" "}
              {companyName}
            </h1>
            <div className="flex mt-4">
              <p className="border border-indigo-500 font-bold px-4 py-2 rounded text-indigo-500">
                {remoteOrOnsite}
              </p>
              <p className="border border-indigo-500 font-bold px-4 py-2 rounded ms-3 text-indigo-500">
                {fulltimeOrParttime}
              </p>
            </div>
            <div className="flex mt-4 text-gray-500 font-medium">
              <img className="me-1" src={locationIcon} alt="" />
              {location}
              <img className="me-1 ms-3" src={salaryIcon} alt="" />
              {salary}
            </div>
          </div>
        </div>

        <div className="button">
          <button className="btn btn-primary text-lg mt-5 font-bold text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;
