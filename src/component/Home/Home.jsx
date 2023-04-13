import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const jobs = useLoaderData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="mt-28 category">
        <h1 className="text-center text-5xl mb-4 font-bold">
          Job Category List
        </h1>
        <p className="text-center mb-8 text-stone-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:flex  gap-10 md:gap-20 justify-center items-center">
          {categories.map((category, indx) => (
            <Category key={indx} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
