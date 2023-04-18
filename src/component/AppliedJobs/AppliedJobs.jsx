import React, { useEffect, useState } from "react";
import jobsData from "../../../public/jobs.json";
import { getShoppingCart } from "../../fakedb";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const getData = getShoppingCart(); // retrieve saved data from local storage
  const jobsId = Object.keys(getData);
  const [appliedJobs, setAppliedJobs] = useState([]);


  useEffect(() => {
    const appliedJobsArr = jobsId.map((jobId) => {
      return jobsData.find((job) => job.id === parseInt(jobId));
    });
    setAppliedJobs(appliedJobsArr);
  }, []);

  const handleFilter = (option) => {
    const filteredJobs = jobsData.filter((job) => job.remoteOrOnsite === option);
    setAppliedJobs(filteredJobs);
  };

  return (
    <div>
      <HeaderBanner header="Applied Jobs"></HeaderBanner>
      <div className="flex justify-end">
      <div className="dropdown  mt-28 ">
        <label tabIndex={0} className="btn btn-primary text-base font-bold">
          Filter By <ChevronDownIcon className="h-6 w-6 ms-1" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
        >
          <li>
            <a onClick={()=> handleFilter("Remote")}>Remote</a>
          </li>
          <li>
            <a onClick={() => handleFilter("Onsite")}>Onsite</a>
          </li>
        </ul>
      </div>
      </div>
      <div>
        {appliedJobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
