/* eslint-disable no-unused-vars */
import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-teal-600 place-content-center p-28 ">
        <div className="w-4/5 mx-auto ">
          <div className="flex flex-col items-center justify-items-center">
            <h1 className="text-white text-5xl font-semibold">
              about component
            </h1>
            <div className=" flex ">
              <div className=" bg-white w-24 h-2 m-6"></div>
              <i className="fa-solid fa-star mt-5 text-white"></i>
              <div className=" bg-white w-24 h-2 m-6"></div>
            </div>
            <div className="flex ">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
