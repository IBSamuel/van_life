import React from 'react'
import CustomNavbar from '../Navbar'
import MenueHost from '../Menuhost'
import barChartImage from '../assets/Group 313.png'
import Footer from '../Footer'

const Income = () => {
  return (
    <>
      <CustomNavbar />
      <MenueHost />
      <div className='m-10'>
        <div>
          <p className='text-3xl font-bold'>Income</p>
          <br />
          <p>Last <span className='font-semibold underline'>30 days</span></p>
          <p className='text-7xl font-bold'>$2,260</p>
        <img src={barChartImage} alt="" />
        </div>
        <p className="flex justify-between">
                    <span className='text-4xl font-semibold'>Your transactions (3) </span>
                    <span >Last <span className='underline'>30 days</span></span>
                </p>
                <ul role="list" className="divide-y ">
                   
    <li className="py-3 sm:py-4 ">
 
        <div className="flex items-center bg-white p-4 rounded-lg">
            <div className="flex-shrink-0">
               <p className='text-4xl'>$720</p>
            </div>
            <div className="flex-1 min-w-0 ms-4">
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                1/12/22
            </div>
        </div>
    </li>

                    </ul>
      </div>
      <Footer/>
    </>
  )
}

export default Income