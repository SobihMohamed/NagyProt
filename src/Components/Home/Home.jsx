/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="  bg-teal-600 p-20  place-content-center">
        <div className="flex flex-col  items-center 	">
          <img src={logo} className="w-64 " alt="" />
          <h1 className="text-white text-5xl font-semibold">start Framework</h1>
          <div className=" flex ">
            <div className=" bg-white w-24 h-2 m-6"></div>
            <i className="fa-solid fa-star mt-5 text-white"></i>
            <div className=" bg-white w-24 h-2 m-6"></div>
          </div>
          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
