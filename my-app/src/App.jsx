// src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import MegaFooter from "./components/MegaFooter";
import Home from "./components/home";           // تأكد من حالة الأحرف
import SignIn from "./Authencation/Signup";   // تأكد من اسم المجلد الصحيح
import Map from "./components/Map";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <MegaFooter />
  </>
);

// عرّف الراوتر هنا (خارج App أو فوق JSX داخل App)
// المهم: يكون مُعَرَّف قبل <RouterProvider router={router} />
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Route>

      {/* no layout */}
      <Route path="/signin" element={<SignIn />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

























































{/*import React from "react";
  import { createBrowserRouter , createRoutesFromElements , Outlet , Route , RouterProvider } from "react-router-dom";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Warnings from "./components/Warnings";
import Departments from "./components/Departments";
import MarqueeDepartments from "./components/MarqueeDepartments";
import Footer from "./components/Footer";
import LaptopHero from "./components/LaptopHero";
import TitlesWithSideImage from "./components/TitlesWithSideImage";
import TitlesWithSideImageReversed from "./components/TitlesWithSideImageReversed";
import TitlesWithSideImageRight from "./components/TitlesWithSideImageRight";
import MegaFooter from "./components/MegaFooter";





const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <MegaFooter/>

 </>
  )
   
}




export default function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-10 pt-24">
        <Hero />
      
      </main>
       <LaptopHero />
      <Benefits />
      <Warnings />
      <Departments />
      <MarqueeDepartments />
      <TitlesWithSideImage />
      <TitlesWithSideImageReversed />
      <TitlesWithSideImageRight />
      <MegaFooter/>
    </>
  );
}
*/}
 