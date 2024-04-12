import React from 'react';
import backGroundImage from "./assets/image 53.png";
import CustomNavbar from './Navbar';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Homehero = () => {
  return (
    <>
      <CustomNavbar/>
      <div className="relative w-screen mx-auto">
        <img className="w-screen h-screen object-cover sm:h-auto" src={backGroundImage} alt="Random image"/>
        <div className="absolute inset-0 bg-gray-700 opacity-0 "></div>
        <div className="absolute inset-0 items-center text-center justify-content-center mt-64">
          <p className="text-white lg:text-7xl text-3xl font-bold">You got the travel plans, <br /> we got the travel vans.</p>
          <p className="text-white lg:text-xl text-xs font-semibold">Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your perfect road trip.</p>
          <br />
          <Link to="/van" type="button" className="text-white bg-amber-600  hover:bg-amber-700 focus:ring-2 focus:ring-amber-400 font-medium rounded-lg  text-sm  py-2.5 me-4 mb-4 px-20  focus:outline-none dark:focus:ring-blue-800">Find your van</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Homehero;
