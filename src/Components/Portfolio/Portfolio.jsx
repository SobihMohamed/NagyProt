/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logoOne from "../../assets/poert1.png";
import logoSec from "../../assets/port2.png";
import logoThr from "../../assets/port3.png";
export default function Portfolio() {
  const [file, setFile] = useState(null);
  const [display, setDisplay] = useState(false);
  const arr = [logoOne, logoSec, logoThr];

  function openImg(item) {
    console.log(item);
    setFile(item);
    setDisplay(true);
  }
  function closeImg() {
    setFile(null);
    setDisplay(false);
  }
  return (
    <>
      <div className="w-10/12 mx-auto p-8">
        {display && (
          <div
            onClick={closeImg}
            className="layer h-screen fixed z-50 top-0 left-0 right-0 bottom-0 bg-blue-300 bg-opacity-55 flex items-center justify-center"
            aria-hidden={!display}
          >
            <div className="w-1/3">
              <img src={file} className="w-full" alt="Company Logo" />
            </div>
          </div>
        )}

        <div className="text-center ">
          <h1 className="text-6xl font-semibold">portfolio component</h1>
          <div className="flex place-content-center ">
            <div className=" bg-gray-800 w-24 h-2 m-6"></div>
            <i className="fa-solid fa-star mt-5 text-gray-800"></i>
            <div className=" bg-gray-800 w-24 h-2 m-6"></div>
          </div>
        </div>
        <div className="flex gap-x-6">
          {arr.map((item, index) => (
            <div
              onClick={() => openImg(item)}
              key={index}
              className="basis-1/3 relative"
            >
              <img src={item} className="rounded-md" alt="" />
              <div className="opacity-0 hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-plus z-20 left-1/3 mx-10 mt-4 text-8xl top-1/3 absolute place-item-center text-white"></i>
                <div className="bg-teal-500 opacity-40 absolute top-0 left-0 bottom-0 right-0"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-x-6 mt-8">
          {arr.map((item, index) => (
            <div
              onClick={() => openImg(item)}
              key={index}
              className="basis-1/3 relative"
            >
              <img src={item} className="rounded-md" alt="" />
              <div className="opacity-0 hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-plus z-20 left-1/3 mx-10 mt-4 text-8xl top-1/3 absolute place-item-center text-white"></i>
                <div className="bg-teal-500 opacity-40 absolute top-0 left-0 bottom-0 right-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


