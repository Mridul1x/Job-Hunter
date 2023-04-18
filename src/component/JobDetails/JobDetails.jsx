import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import image from "../../assets/All Images/Vector.png";
import image1 from "../../assets/All Images/Vector-1.png";
import { addToDb } from "../../fakedb";

const JobDetails = () => {
  
  const details = useLoaderData();
  
  const handleData = (id) =>{
    const addData = addToDb(id);
  }
 

  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={image} alt="" />
        <h1 className="text-3xl font-bold">Job Details</h1>
        <img src={image1} alt="" />
      </div>

      <div className="mt-28 grid w-11/12 mx-auto md:grid-cols-3 gap-6 ">
        <div className="description col-span-2">
          <p>
            <span className="font-bold">Job Description: </span>
            {details.jobDescription}
          </p>
          <p className="my-6">
            <span className="font-bold">Job Responsibility:</span>
            {details.jobResponsibility}
          </p>
          <h1 className="font-bold">Educational Requirements:</h1>
          <p>{details.educationalRequirements}</p>
          <h1 className="font-bold mt-6">Experience:</h1>
          <p>{details.experiences}</p>
        </div>
        <div className="info ">
          <div className="bg-indigo-200 p-5 rounded">
          <h1 className="text-xl font-bold mb-6">Job Details</h1>
          <hr />
          <p className="mt-3 mb-2">
            <img className="me-1 inline" src={details.salaryIcon} alt="" />
            <span className="font-semibold">Salary: </span>{details.salary}
          </p>
          <p  className="mb-3">
            <img className="me-1 inline" src={details.jobTitleIcon} alt="" />
            <span className="font-semibold">Job Title: </span>{details.jobTitle}
          </p>
          <h1 className="text-xl font-bold mb-6">Contact Information</h1>
          <hr />
          <p className="mt-3 mb-2">
            <img className="me-1 inline" src={details.phoneIcon} alt="" />
            <span className="font-semibold">Phone: </span>{details.contactInformation.phone}
          </p>
          <p className="mb-2">
            <img className="me-1 inline" src={details.emailIcon} alt="" />
            <span className="font-semibold">Email: </span>{details.contactInformation.email}
          </p>
          <p >
            <img className="me-1 inline" src={details.locationIcon} alt="" />
            <span className="font-semibold">Addres: </span>{details.location}
          </p>
          </div>
          <button onClick={()=>handleData(details.id)} className="btn btn-primary mt-3 font-bold text-white w-full">Apply Now</button>
        </div>

       
      </div>
    </div>
  );
};

export default JobDetails;
