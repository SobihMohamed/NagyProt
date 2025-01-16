/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layer from "./Components/Layer/Layer";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layer />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
