import React from "react";

const Category = ({ category }) => {
  return (
    <div className="bg-indigo-300 ps-8 py-8 pe-12 rounded-lg mt-8">
      <img src={category.categoryLogo} alt="" />
      <h1 className="text-xl mb-2 mt-7 font-bold">{category.categoryName}</h1>
      <p className="text-stone-500">{category.jobsAvailable} Jobs Available</p>
    </div>
  );
};

export default Category;
