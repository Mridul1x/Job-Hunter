import React from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

const Blogs = () => {
  return (
    <div>
      <HeaderBanner header="Blog"></HeaderBanner>
      <div className="mt-12 border-x-4 border-x-secondary-content border-indigo-500 p-3">
        <h1 className="text-xl font-bold">
          1. When should you use context API?
        </h1>
        <p className="text-justify mt-1 mb-3">
          Context API is a way to create a shared "global storage" in React
          application, where we can store data or state that needs to be
          accessed by multiple components across different parts of application.
          It helps to avoid prop drilling (passing props through multiple levels
          of components), making it easier to manage and update shared data or
          state in a more efficient and organized way. Context API is useful in
          situations where we have data or state that needs to be accessed by
          multiple components that are not directly related in the component
          tree.
        </p>
        <h1 className="text-xl font-bold">2. What is a custom hook?</h1>
        <p className="text-justify mt-1 mb-3">
          A custom hook is a way for us to create our own set of reusable logic
          that can be shared across different components in a React application.
          It allows us to abstract and encapsulate complex logic or state
          management into a single hook function, making it easier to manage and
          reuse the same logic in multiple components without duplicating code.
          Custom hooks provide a way for us to create reusable and modular
          pieces of logic that can be easily shared and used throughout our
          application, making our code more organized and maintainable.
        </p>
        <h1 className="text-xl font-bold">3. What is useRef?</h1>
        <p className="text-justify mt-1 mb-3">
          useRef is a way for us to create a reference to a DOM element or a
          value in a React component that doesn't trigger re-renders. We can use
          it to store and access values that need to persist across renders, or
          to directly interact with DOM elements, such as getting input values
          or manipulating DOM nodes. useRef is useful when we want to maintain a
          reference to a value or a DOM element in a component without causing
          it to re-render, and we can use the ref object to get and set the
          current value of the reference.
        </p>
        <h1 className="text-xl font-bold">4. What is useMemo?</h1>
        <p className="text-justify mt-1">
          useMemo is a technique we can use in a React component to cache or
          memoize the result of a function so that we don't have to recompute it
          every time the component re-renders. It helps to improve performance
          by avoiding unnecessary computations and only recomputing the result
          when the inputs to the function change. We can use useMemo to optimize
          computationally expensive operations, such as complex calculations,
          data processing, or API requests, to prevent unnecessary
          re-computations and improve the performance of our components.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
