import React from 'react'
import backGroundImage from "./assets/image 53.png"
import CustomNavbar from './Navbar'
import { Footer } from 'flowbite-react'

const Homehero = () => {
  return (
    <>
    <CustomNavbar/>
<div className="relative h-screen mx-auto">
    <img className="w-screen w-fll object-cover" src={backGroundImage} alt="Random image"/>
    <div className="absolute inset-0 bg-gray-700 opacity-0 "></div>
    <div className="absolute inset-0 items-center text-center justify-content-center md:mt-64 sm:mt-20">
        <p className="text-white lg:text-8xl font-bold">You got the travel plans, <br /> we got the travel vans.</p>
        <p className="text-white text-xl font-semibold">Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your perfect road trip.</p>
        <button type="button" class="text-white bg-amber-600  hover:bg-amber-700 focus:ring-2 focus:ring-amber-400 font-medium rounded-lg  text-sm  py-2.5 me-4 mb-4 px-20  focus:outline-none dark:focus:ring-blue-800  
">Find your van</button>
    </div>
</div>
<Footer/>

    </>
  )
}

export default Homehero