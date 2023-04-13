import React from "react";
import banner from "../../assets/All Images/man.png";

const Banner = () => {
  return (
    <div>
      <div className="md:flex justify-around items-center mt-6">
        <div className="details-container ">
          <h1 className="text-7xl font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-indigo-500">Dream Job</span>{" "}
          </h1>
          <p className="mt-6 text-stone-600">
            Explore thousands of job opportunities with all <br /> the
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn btn-primary mt-6 text-white">
            Get Started
          </button>
        </div>
        <div className="picture">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
