import React, { useEffect, useState } from "react";
import jobsData from "../../../public/jobs.json";
import { getShoppingCart } from "../../fakedb";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

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

  return (
    <div>
      <HeaderBanner header="Applied Jobs"></HeaderBanner>
      <div className="mt-52">
        {
           appliedJobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>))
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
