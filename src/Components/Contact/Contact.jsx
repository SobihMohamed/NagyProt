/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

export default function Contact() {
  const [inputOne, setInputOne] = useState("hidden");
  const [inputTwo, setInputTwo] = useState("hidden");
  const [inputThree, setInputThree] = useState("hidden");
  const [inputFour, setInputFour] = useState("hidden");
  function inputOneChanges(e) {
    setInputOne(e.target.value.trim() !== "" ? "" : "hidden");
  }
  function inputTwoChanges(e) {
    setInputTwo(e.target.value.trim() !== "" ? "" : "hidden");
  }
  function inputThreeChanges(e) {
    setInputThree(e.target.value.trim() !== "" ? "" : "hidden");
  }
  function inputFourChanges(e) {
    setInputFour(e.target.value.trim() !== "" ? "" : "hidden");
  }
  return (
    <>
      <div className="p-10">
        <div className="text-center">
          <h1 className="text-6xl font-semibold">conatct section</h1>
          <div className="flex place-content-center ">
            <div className=" bg-gray-800 w-24 h-2 m-6"></div>
            <i className="fa-solid fa-star mt-5 text-gray-800"></i>
            <div className=" bg-gray-800 w-24 h-2 m-6"></div>
          </div>
        </div>
        <div className="relative mx-auto w-2/4 ">
          <p className={`absolute ml-7 text-green-500 top ${inputOne}`}>
            userName :
          </p>
          <input
            type="text"
            placeholder="userName"
            className="border-b-2 m-5 p-2 w-full focus:outline-none"
            onChange={inputOneChanges}
          />
        </div>
        <div className="relative mx-auto w-2/4 ">
          <p className={`absolute ml-7 text-green-500 top ${inputTwo}`}>
            userAge :
          </p>
          <input
            type="text"
            placeholder="userAge"
            className="border-b-2 m-5 p-2 w-full focus:outline-none"
            onChange={inputTwoChanges}
          />
        </div>
        <div className="relative mx-auto w-2/4 ">
          <p className={`absolute ml-7 text-green-500 top ${inputThree}`}>
            userEmail :
          </p>
          <input
            type="text"
            placeholder="userEmail"
            className="border-b-2 m-5 p-2 w-full focus:outline-none"
            onChange={inputThreeChanges}
          />
        </div>
        <div className="relative mx-auto w-2/4 ">
          <p className={`absolute ml-7 text-green-500 top ${inputFour}`}>
            userPassword :
          </p>
          <input
            type="text"
            placeholder="userPassword"
            className="border-b-2 m-5 p-2 w-full focus:outline-none"
            onChange={inputFourChanges}
          />
          <button className=" bg-green-500 text-white rounded-md p-2 ml-5 my-3 ">
            send Message
          </button>
        </div>
      </div>
    </>
  );
}
