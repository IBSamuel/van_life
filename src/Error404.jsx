
import React from 'react'
import Footer from './Footer'
import CustomNavbar from './Navbar'

const Error404 = () => {
  return (
    <>
      <CustomNavbar/>
      <div className='h-dvh'>
      <div className='mx-auto text-center w-4/6'>
        <p className='text-7xl mt-10 font-semibold'>Sorry, the page you were looking for was not found.</p>
        <br />
        <button className='bg-black text-white p-2 rounded w-4/5'>Return to home</button>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Error404