import React from 'react'
import CustomNavbar from './Navbar'
import Footer from './Footer'

const Signin = () => {
    return (
        <>
            <CustomNavbar />
            <div className='h-dvh'>
                <div className='mx-auto mt-20 w-4/6 display: block;
'>
                <p className='text-4xl text-center font-semibold'>Sign in to your account</p>
<br />
                    <input type="text" class="block w-full  text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" />
                    <input type="text" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                    <br />
                    <br />
                    <button type="button" class="w-full text-white bg-amber-600  hover:bg-amber-700 focus:ring-2 focus:ring-amber-400 font-medium rounded-lg  text-sm  py-2.5 me-4 mb-4 px-20  focus:outline-none dark:focus:ring-blue-800  
">Find your van</button>
                    <p className='text-center'>Don’t have an account? <span className='text-color-100 text-xl'>Create one now</span></p>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Signin