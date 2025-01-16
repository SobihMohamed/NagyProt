/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800 p-20">
        <div className="w-11/12 mx-auto text-center text-white flex  items-center justify-center">
          <div className="basis-1/3">
            <h2 className="text-2xl font-semibold">LOCATION</h2>
            <p className="my-2">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="basis-1/3 ">
            <h2 className="text-2xl font-semibold mb-2">AROUND THE WEB</h2>
            <i className="fa-brands fa-facebook px-3 border rounded-full p-2 text-xl mx-2"></i>
            <i className="fa-brands fa-twitter px-3 border rounded-full p-2 text-xl mx-2"></i>
            <i className="fa-brands fa-linkedin px-3 border rounded-full p-2 text-xl mx-2"></i>
            <i className="fa-solid fa-globe border px-3  rounded-full p-2 text-xl mx-2"></i>
          </div>
          <div className="basis-1/3">
            <h2 className="text-2xl font-semibold">ABOUT FREELANCER</h2>
            <p className="my-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center p-4">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
