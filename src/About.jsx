import React from 'react'
import aboutImage from './assets/image 54.png'
import Navbar from './Navbar'
import Footer from './Footer'
const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <img className='w-full' src={aboutImage} alt="" />
        <div className='m-10'>
          <p className='text-5xl font-bold '>Don’t squeeze in a sedan when you could relax in a van.</p>
          <p className='text-xl'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='m-10 p-10 bg-color-100 rounded'>
          <div>
          <p className='text-4xl '>Your destination is waiting.
Your van is ready.</p>
<button type="button" className="text-white bg-black border border-black focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:black-gray-600 dark:focus:ring-gray-700">Explore our vans</button>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About