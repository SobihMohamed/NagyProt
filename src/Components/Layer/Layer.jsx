/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layer() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
