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
      <div>{job.jobTitle}</div>
    </div>
  );
};

export default AppliedJobsDetails;
